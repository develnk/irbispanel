#include <QtWebSockets/qwebsocket.h>
#include "Request.h"
#include "../system/System.h"

Request::Request(QWebSocket *pClient, QList<QString> headers, QString message, quint32 connect_key)
{
    qDebug() << message;
    mClient = pClient;
    this->req_sesid = requestSesId(message);
    this->ses_name = session.sessionName(headers);
    QVariantMap data = requestData(message);
    user = session.getUser(connect_key, ses_name, req_sesid);

    // Check User permissions.
    // @todo Write check user permissions.

    // Execute request.
    if (data["controller"].toString() == "system") {
        System *system = new System();
        this->response = system->execute(connect_key, ses_name, req_sesid, data);
    }
    else if (helper.pluginMap.contains(data["controller"].toString())) {
        RequestInterface *object = helper.pluginMap[data["controller"].toString()];
        this->response = object->execute(connect_key, ses_name, req_sesid, data);
    }
}

QByteArray Request::result()
{
    QByteArray result;
    // If have answer then serialize it to json object and send to angular application
    if (this->response.count() >= 1 ) {
        result = helper.response(this->response);
    }

    return result;
}

QString Request::requestSesId(QString message)
{
    QString result;
    QVariantMap parse_message = helper.parse(message.toUtf8());
    if (parse_message.contains("ses_id")) {
        result = parse_message.value("ses_id").toString();
    }
    return result;
}

QVariantMap Request::requestData(QString message)
{
    QVariantMap result;
    QVariantMap parse_message = helper.parse(message.toUtf8());
    if (parse_message.contains("data")) {
        QString controller_name;
        QString method_name;
        QVariantMap tst = parse_message["data"].toMap();
        if (tst.contains("controller") && tst.contains("method") && tst.contains("values")) {
            controller_name = tst["controller"].toString();
            method_name = tst["method"].toString();
            // Check controller name and controller method
            if (helper.pluginOp.contains(controller_name)) {
              QStringList methods = helper.pluginOp[controller_name];
              QStringList::iterator it = qFind(methods.begin(), methods.end(), method_name);
              if (it != methods.end()) {
                result = tst;
                qDebug() << "This method exist";
              }
              else {
                qDebug() << "This method not found";
              }
            }
            else if (controller_name == "system" || controller_name == "getcpu") {
              //@TODO Create checking on exist method.
              result = tst;
            }
            else {
              qDebug() << "This controller not found";
            }
        }
    }
    return result;
}

Request::~Request()
{

}
