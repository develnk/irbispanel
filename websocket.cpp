#include "QtWebSockets/qwebsocketserver.h"
#include "QtWebSockets/qwebsocket.h"
#include <QtNetwork/QSslKey>
#include <QtCore/QFile>

#include "websocket.h"

QT_USE_NAMESPACE

WebSocket::WebSocket(quint16 port, QObject *parent)
    :
    QObject(parent),
    m_pWebSocketServer(Q_NULLPTR),
    m_clients()
{
    m_pWebSocketServer = new QWebSocketServer(QStringLiteral("Admin-plesk"),
                                              QWebSocketServer::SecureMode,
                                              this);
    QSslConfiguration sslConfiguration;
    QFile certFile(QStringLiteral("cert/certs/server.crt"));
    QFile keyFile(QStringLiteral("cert/private/server.key"));
    certFile.open(QIODevice::ReadOnly);
    keyFile.open(QIODevice::ReadOnly);
    QSslCertificate certificate(&certFile, QSsl::Pem);
    QSslKey sslKey(&keyFile, QSsl::Rsa, QSsl::Pem);
    certFile.close();
    keyFile.close();
    sslConfiguration.setPeerVerifyMode(QSslSocket::VerifyNone);
    sslConfiguration.setLocalCertificate(certificate);
    sslConfiguration.setPrivateKey(sslKey);
    sslConfiguration.setProtocol(QSsl::SecureProtocols);
    m_pWebSocketServer->setSslConfiguration(sslConfiguration);

    if (m_pWebSocketServer->listen(QHostAddress::Any, port)) {
        qDebug() << "Admin Server listening on port" << port;
        connect(m_pWebSocketServer, &QWebSocketServer::newConnection, this, &WebSocket::onNewConnection);
        connect(m_pWebSocketServer, &QWebSocketServer::sslErrors, this, &WebSocket::onSslErrors);
    }
}

WebSocket::~WebSocket()
{
    m_pWebSocketServer->close();
    delete(&m_clients);
}

void WebSocket::onNewConnection()
{
    QWebSocket *pSocket = m_pWebSocketServer->nextPendingConnection();
    QList<QString> headers;
    QMap<QWebSocket*, QList<QString>> m_request;
    headers << pSocket->request().rawHeader(QByteArray::fromStdString("user-agent")) << pSocket->request().rawHeader(QByteArray::fromStdString("x-real-ip"));
    m_request.insert(pSocket, headers);
    connect_key++;
    m_clients.insert(connect_key, m_request);

    connect(pSocket, &QWebSocket::textMessageReceived, this, [&](const QString message) {
        processMessage(message, connect_key, pOp);
    });
    connect(pSocket, &QWebSocket::disconnected, this, [&]() {
        socketDisconnected(connect_key);
    });
}

void WebSocket::processMessage(QString message, quint32 connect_key_id, QMap<QString, QStringList> pluginOp)
{
    if (m_clients.contains(connect_key_id)) {
        QMap<QWebSocket *, QList<QString>>::iterator it = m_clients[connect_key_id].begin();
        QWebSocket *pClient = qobject_cast<QWebSocket *>(it.key());
        QList<QString> headers = it.value();
        Request *request = new Request(pClient, headers, message, connect_key_id);
        connect(request, &Request::sendToWebsocket, this, &WebSocket::wsSend, Qt::DirectConnection);
    }
}

void WebSocket::socketDisconnected(quint32 connect_key_id)
{
    if (m_clients.contains(connect_key_id)) {
        QMap<QWebSocket *, QList<QString>>::iterator it = m_clients[connect_key_id].begin();
        QWebSocket *pClient = qobject_cast<QWebSocket *>(it.key());
        pClient->deleteLater();
        m_clients.remove(connect_key_id);
    }
}


void WebSocket::onSslErrors(const QList<QSslError> &)
{
    qDebug() << "Ssl errors occurred";
}

void WebSocket::wsSend(QWebSocket *pClient, QByteArray result, Request *request)
{
    if (result.size() > 1) {
        pClient->sendTextMessage(QString::fromLatin1(result));
    }
}
