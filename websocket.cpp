#include "QtWebSockets/qwebsocketserver.h"
#include "QtWebSockets/qwebsocket.h"
#include <QtNetwork/QSslKey>
#include <QtCore/QFile>
#include <QDebug>

#include "websocket.h"
#include "src/common/request/Request.h"

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
        lastId = 0;
        qDebug() << "Admin Server listening on port" << port;
        connect(m_pWebSocketServer, &QWebSocketServer::newConnection, this, &WebSocket::onNewConnection);
        connect(m_pWebSocketServer, &QWebSocketServer::sslErrors, this, &WebSocket::onSslErrors);
    }
}

WebSocket::~WebSocket()
{
    m_pWebSocketServer->close();
    m_clients.clear();
}

void WebSocket::onNewConnection()
{
    QWebSocket *pSocket = m_pWebSocketServer->nextPendingConnection();
    QList<QString> headers;
    QMap<QWebSocket *, QList<QString>> m_request;
    headers << pSocket->request().rawHeader(QByteArray::fromStdString("user-agent")) << pSocket->request().rawHeader(QByteArray::fromStdString("x-real-ip"));
    m_request.insert(pSocket, headers);
    quint32 id = ++lastId;
    m_clients.insert(id, m_request);

    connect(pSocket, &QWebSocket::textMessageReceived, this, [&, id](const QString message) {
        this->processMessage(message, lastId, pOp);
    });
    connect(pSocket, &QWebSocket::disconnected, this, [&, id]() {
        this->socketDisconnected(lastId);
    });
}

void WebSocket::processMessage(QString message, quint32 id, QMap<QString, QStringList> pluginOp)
{
    if (m_clients.contains(id)) {
        QMap<QWebSocket *, QList<QString>>::iterator it = m_clients[id].begin();
        QWebSocket *pClient = qobject_cast<QWebSocket *>(it.key());
        QList<QString> headers = it.value();
        Request *request = new Request(pClient, headers, message, id);
        QByteArray result = request->result();
        if (result.size() > 1) {
            pClient->sendTextMessage(QString::fromLatin1(result));
        }
    }
}

void WebSocket::socketDisconnected(quint32 id)
{
    if (m_clients.contains(id)) {
        QMap<QWebSocket *, QList<QString>>::iterator it = m_clients[id].begin();
        QWebSocket *pClient = qobject_cast<QWebSocket *>(it.key());
        pClient->deleteLater();
        m_clients.remove(id);
    }
}


void WebSocket::onSslErrors(const QList<QSslError> &)
{
    qDebug() << "Ssl errors occurred";
}
