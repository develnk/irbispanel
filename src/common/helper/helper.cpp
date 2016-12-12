#include "helper.h"
#include "qjson/parser.h"
#include "qjson/serializer.h"

Helper::Helper():uSingleton<Helper>(*this){}

QVariantMap Helper::parse(const QByteArray &json)
{
    QJson::Parser parser;
    bool ok;
    QVariantMap result = parser.parse(json, &ok).toMap();
    if (!ok) {
        qDebug() << parser.errorString() << "in line:" << parser.errorLine();
    }

    return result;
}

QByteArray Helper::response(QJsonObject toJson)
{
    QJson::Serializer serializer;
    bool ok;
    QByteArray json = serializer.serialize(toJson.toVariantMap(), &ok);
    if (!ok) {
        qCritical() << "Something went wrong:" << serializer.errorMessage();
    }

    return json;
}

void Helper::checkExistPermissions(QStringList perms, QString module_name)
{
    QStringList::const_iterator constIterator;
    for (constIterator = perms.begin(); constIterator != perms.constEnd(); ++constIterator) {
        QString perm = (*constIterator).toUtf8().data();
        QSqlQuery query;
        query.prepare("SELECT * FROM permissions WHERE permission=:perm AND module=:module");
        query.bindValue(":perm", perm);
        query.bindValue(":module", module_name);
        query.exec();

        // Get count query rows.
        query.last();
        int count = query.at();
        query.first();

        if(count < 0) {
            query.prepare("INSERT INTO permissions (permission, module) "
                              "VALUES (:1, :2);");
            query.bindValue(":1", perm);
            query.bindValue(":2", module_name);
            query.exec();
        }
        query.finish();
    }
}

QString Helper::GetRandomString(const quint32 length) const
{
    const QString possibleCharacters("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$-");

    QString randomString;
    for(quint32 i=0; i<length; ++i)
    {
        int index = qrand() % possibleCharacters.length();
        QChar nextChar = possibleCharacters.at(index);
        randomString.append(nextChar);
    }
    return randomString;
}
