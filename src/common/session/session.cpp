#include "session.h"

Session::Session():uSingleton<Session>(*this){}

QVariantMap Session::getUser(quint32 connect_key, QString ses_name, QString ses_id)
{
    QVariantMap user;
    m_sessions.insert(connect_key, ses_id);

    if (ses_id == "") {
        // The user not authorized.
        user = loadAnonymous();
    }
    else if(!m_users.contains(ses_id)) {
        QSqlQuery query;
        int uid = 0;

        query.prepare("SELECT * FROM session WHERE ssid=:sesid AND session_name=:sesname AND created<:created");
        query.bindValue(":sesid", ses_id);
        query.bindValue(":sesname", ses_name);
        query.bindValue(":created", QDateTime::currentDateTime().toMSecsSinceEpoch() - 3600);
        query.exec();
        while (query.next()) {
            uid = query.value("uid").toInt();
        }

        if (uid != 0) {
            // The user are authorized.
            SystemUser *sysuser = new SystemUser(uid);
            user = sysuser->getUser();
            m_users.insert(ses_id, user);
        }
        else {
            // The user are not authorized.
            user = loadAnonymous();
        }
    }


    return user;
}

QVariantMap Session::loadAnonymous()
{
    SystemUser *sysuser = new SystemUser(0);
    return sysuser->getUser();
}

QString Session::readSession(quint32 connect_key)
{

}

QString Session::writeSession(quint32 connect_key, quint32 uid, QString ses_name)
{
    const QString ses_id = helper.GetRandomString(64);
    QSqlQuery query;
    query.prepare("INSERT INTO session VALUES(:uid, :ses_name, :ses_id, :time)");
    query.bindValue(":uid", uid);
    query.bindValue(":ses_name", ses_name);
    query.bindValue(":ses_id", ses_id);
    query.bindValue(":time", QDateTime::currentDateTime().toMSecsSinceEpoch());
    query.exec();
    m_sessions.insert(connect_key, ses_id);

    return ses_id;
}

QString Session::sessionName(QList<QString> headers)
{
    QCryptographicHash hash(QCryptographicHash::Sha256);
    QList<QString>::iterator it = headers.begin();
    QString new_headers;
    while (it != headers.end()) {
        new_headers.append(*it);
        ++it;
    }

    hash.addData(new_headers.toUtf8().data());
    return hash.result().toHex().data();
}
