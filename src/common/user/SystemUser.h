#ifndef TEST2_SYSTEM_USER_H
#define TEST2_SYSTEM_USER_H

#include <QtCore/qstring.h>
#include <QtSql>
#include <iostream>

class SystemUser
{
public:
    explicit SystemUser(int);
    ~SystemUser();
    QVariantMap getUser();

private:
    QVariantMap user;

};

#endif //TEST2_SYSTEM_USER_H