#include "SystemUser.h"

SystemUser::SystemUser(int uid)
{
    QSqlQuery query;
    query.prepare("SELECT * FROM user WHERE uid=:uid");
    query.bindValue(":uid", uid);
    query.exec();
    while (query.next()) {
        user.insert("uid", query.value("uid").toInt());
        user.insert("name", query.value("name").toString());
        user.insert("mail", query.value("mail").toString());
        user.insert("status", query.value("status").toInt());
        user.insert("created", query.value("created").toInt());
        user.insert("login", query.value("login").toInt());
    }
    if (query.lastError().isValid()) {
        qDebug() << query.lastError();
    }
}

QVariantMap SystemUser::getUser()
{
    return user;
}

SystemUser::~SystemUser()
{
    delete[] &user;
}
