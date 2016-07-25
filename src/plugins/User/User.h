#ifndef TEST2_USER_H
#define TEST2_USER_H

#include <QtPlugin>
#include <QObject>
#include <QDebug>
#include <QMap>
#include <QMetaEnum>
#include <QJsonArray>
#include "QtSql/QSqlQuery"
#include <QCryptographicHash>

#include "../../common/request/RequestInterface.h"

class User : public RequestInterface
{
    Q_OBJECT
    Q_INTERFACES(RequestInterface)
    Q_PLUGIN_METADATA(IID "com.LightSide.RequestInterface" FILE "User.json")
    Q_CLASSINFO("Version", "0.0.1")
    Q_ENUMS(op)

public:
    explicit User();
    ~User();
    QStringList getPermissions();
    QJsonObject execute(quint32, QString, QString, QVariantMap);
    QJsonObject moduleLogin(QVariantMap);
    QJsonObject moduleLogout(QVariantMap);
    QStringList operations();
    enum op {login, logout};

signals:
    void sendMessage(const quint32 key, const QString ses_name, const QString ses_id, QVariantMap &data);

private:
    QStringList perms;
    quint32 connect_key;
    QString ses_name;
    QString ses_id;
    QJsonObject getPermissions(quint32);
};

#endif //TEST2_USER_H
