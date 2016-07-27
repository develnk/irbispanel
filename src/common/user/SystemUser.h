#ifndef IRBISPANEL_SYSTEM_USER_H
#define IRBISPANEL_SYSTEM_USER_H

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

#endif //IRBISPANEL_SYSTEM_USER_H