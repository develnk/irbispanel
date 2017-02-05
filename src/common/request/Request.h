#ifndef IRBISPANEL_REQUEST_H
#define IRBISPANEL_REQUEST_H

#include <QWebSocket>
#include <QCryptographicHash>
#include "../system/System.h"
#include "../session/session.h"
#include "../helper/helper.h"

class Request : public QObject
{
    Q_OBJECT

public:
    explicit Request(QWebSocket *, QList<QString>, QString, quint32, QObject *parent = Q_NULLPTR);
    ~Request();
    QByteArray result();

signals:
    void sendToWebsocket(QWebSocket*, QByteArray, Request*);

private slots:
    void readyData(QJsonObject, QString);

private:
    QWebSocket *mClient;
    QVariant user;
    QString requestSesId(QString);
    QVariantMap requestData(QString);
    QString message;
    QString req_sesid;
    QString ses_name;
    quint32 r_number;
    QJsonObject response;
    System system;
    RequestInterface *object;
};


#endif //IRBISPANEL_REQUEST_H
