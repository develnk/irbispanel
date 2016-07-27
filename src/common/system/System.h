#ifndef IRBISPANEL_SYSTEM_H
#define IRBISPANEL_SYSTEM_H

#include <QJsonArray>
#include <QStringList>
#include <QMap>
#include <QObject>
#include <QDebug>
#include <QMetaEnum>

class System
{
public:
    explicit System();
    ~System();
    QStringList getPermissions();
    QJsonObject execute(quint32, QString, QString, QVariantMap);
    QStringList operations();

private:
    QStringList perms;
};


#endif //IRBISPANEL_SYSTEM_H
