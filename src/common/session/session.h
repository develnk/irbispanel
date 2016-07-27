#ifndef IRBISPANEL_SESSION_H
#define IRBISPANEL_SESSION_H

#include <QMap>
#include <QtSql>
#include <QDateTime>
#include "src/common/user/SystemUser.h"
#include "src/common/usingleton.h"
#include "src/common/helper/helper.h"

class   Session;
#define session Session::instance()

class Session: public uSingleton<Session>
{
public:
    Session();
    QVariantMap getUser(quint32, QString, QString);
    void deleteSession(quint32);
    QString sessionName(QList<QString>);
    QString readSession(quint32);
    QString writeSession(quint32, quint32, QString);

private:
    QMap<quint32, QString> m_sessions;
    QMap<QString, QVariantMap> m_users;
    QVariantMap loadAnonymous();
};

#endif //IRBISPANEL_SESSION_H
