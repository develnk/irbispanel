#include "User.h"
#include <QSqlQuery>
#include "../../common/helper/helper.h"
#include "../../common/user/SystemUser.h"

User::User()
{
    // Set module permissions.
    perms.append("change own username");
    perms.append("change own password");
    perms.append("change any password");
    perms.append("create users");
    perms.append("administer users");
}

QStringList User::getPermissions()
{
    return perms;
}

QStringList User::operations()
{
    QStringList result;
    QMetaObject MetaObject = this->staticMetaObject;
    int indexOfEnumerator = MetaObject.indexOfEnumerator("op");
    QMetaEnum MetaEnum = MetaObject.enumerator(indexOfEnumerator);

    for (int i = 0; i < MetaEnum.keyCount(); ++i) {
        result.append(MetaEnum.valueToKey(i));
    }

    return result;
}

QJsonObject User::execute(quint32 key, QString ses_name, QString ses_id, QVariantMap data)
{
    QJsonObject result;
    this->connect_key = key;
    this->ses_name = ses_name;
    this->ses_id = ses_id;
    QMetaObject MetaObject = this->staticMetaObject;
    int indexOfEnumerator = MetaObject.indexOfEnumerator("op");
    QMetaEnum MetaEnum = MetaObject.enumerator(indexOfEnumerator);
    QVariantMap values = data["data"].toMap();

    switch (MetaEnum.keysToValue(data["method"].toString().toLatin1().constData())) {
        case login:
            result.insert("data", moduleLogin(values));
            break;

        case logout:
            result.insert("data", moduleLogout(values));
            break;
    }

    result["controller"] = "User";
    result["method"] = data["method"].toString().toLatin1().constData();

    return result;
}

QJsonObject User::moduleLogin(QVariantMap data)
{
    QJsonObject result;
    // Check user name and pass.
    QCryptographicHash hash(QCryptographicHash::Sha3_512);

    qDebug() << "Plugin data" << data;
    if (data.contains("login") && data.contains("pass")) {
        hash.addData(data["pass"].toString().toUtf8().data());
        QString hash_pass = hash.result().toHex().data();
        QSqlQuery query;
        query.prepare("SELECT * FROM user WHERE name=:name AND pass=:pass");
        query.bindValue(":name", data["login"].toString().toUtf8().data());
        query.bindValue(":pass", hash_pass);
        query.exec();
        while (query.next()) {
            qDebug() << "User exist";
            data["key"] = 0;
            data["uid"] = query.value(0).toUInt();
            emit sendMessage(this->connect_key, this->ses_name, this->ses_id, data);
            result["ses_id"] = data["ses_id"].toString();
            result["name"] = query.value(1).toString();
            result["mail"] = query.value(3).toString();
            result["status"] = query.value(4).toString();
            result["permissions"] = getPermissions(data["uid"].toUInt());
        }
    }

    return result;
}

QJsonObject User::moduleLogout(QVariantMap data)
{
    qDebug() << "logout";
}

QJsonObject User::getPermissions(quint32 uid)
{
    QJsonObject result;
    quint32 count = 0;
    QSqlQuery query;
    query.prepare("SELECT ur.rid, r.name AS role_name, p.module, p.permission FROM users_roles ur "
                      "INNER JOIN role r ON ur.rid=r.rid INNER JOIN role_perm rp ON ur.rid=rp.rid "
                      "INNER JOIN permissions p ON rp.perm_id=p.perm_id WHERE ur.uid=:uid;");
    query.bindValue(":uid", uid);
    query.exec();
    while (query.next()) {
        QJsonObject value {
            {"rid", query.value(0).toString()},
            {"role_name", query.value(1).toString()},
            {"module", query.value(2).toString()},
            {"permission", query.value(3).toString()}
        };
        result.insert(QString::number(count++), value);
    }

    return result;
}

User::~User()
{
    delete[] &perms;
}
