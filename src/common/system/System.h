#ifndef IRBISPANEL_SYSTEM_H
#define IRBISPANEL_SYSTEM_H

#include <QJsonArray>
#include <QStringList>
#include <QMap>
#include <QObject>
#include <QMetaEnum>
#include "SystemInfo.h"


class System : public QObject
{
    Q_OBJECT

public:
    explicit System(QObject *parent = Q_NULLPTR);
    ~System();
    QStringList getPermissions();
    void execute(quint32, QString, QString, QVariantMap);
    QStringList operations();

signals:
    void sendResult(QJsonObject, QString);

private slots:
    void readyData(QJsonObject, QString);

private:
    QStringList perms;
    SystemInfo info;
};


#endif //IRBISPANEL_SYSTEM_H
