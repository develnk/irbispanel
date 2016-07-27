#ifndef IRBISPANEL_REQUEST_H
#define IRBISPANEL_REQUEST_H

#include <websocket.h>
#include <QCryptographicHash>
#include "../session/session.h"
#include "../helper/helper.h"

class Request
{
public:
    explicit Request(QWebSocket *, QList<QString>, QString, quint32);
    ~Request();
    QByteArray result();

private:
    QWebSocket *mClient;
    QVariant user;
    QString requestSesId(QString);
    QVariantMap requestData(QString);
    QString message;
    QString req_sesid;
    QString ses_name;
    QJsonObject response;
};


#endif //IRBISPANEL_REQUEST_H
