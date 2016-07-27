#ifndef IRBISPANEL_REQUESTINTERFACE_H
#define IRBISPANEL_REQUESTINTERFACE_H

#include <QtPlugin>

QT_BEGIN_NAMESPACE
class QStringList;
QT_END_NAMESPACE

#include <QtCore/QObject>

class RequestInterface : public QObject
{

public:
    virtual ~RequestInterface() {};
    virtual QJsonObject execute(quint32, QString, QString, QVariantMap) = 0;
    virtual QStringList getPermissions() = 0;
    virtual QStringList operations() = 0;

signals:
    virtual void sendMessage(const quint32, const QString, const QString, QVariantMap &data) = 0;
};

Q_DECLARE_INTERFACE(RequestInterface, "com.LightSide.RequestInterface");
#endif //IRBISPANEL_REQUESTINTERFACE_H
