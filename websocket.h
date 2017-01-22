#ifndef WEBSOCKET_H
#define WEBSOCKET_H

#include <QObject>
#include <QList>
#include <QtNetwork/QSslError>
#include <QtNetwork/QNetworkRequest>
#include <QSettings>
#include <QSignalMapper>

QT_FORWARD_DECLARE_CLASS(QWebSocketServer)
QT_FORWARD_DECLARE_CLASS(QWebSocket)

class WebSocket : public QObject
{
  Q_OBJECT

public:
    explicit WebSocket(quint16 port, QObject *parent = Q_NULLPTR);
    ~WebSocket();

public slots:
    void wsSend(QWebSocket*, QByteArray);

private slots:
    void onNewConnection();
    void onSslErrors(const QList<QSslError> &errors);

private:
    QWebSocketServer *m_pWebSocketServer;
    QMap<quint32, QMap<QWebSocket *, QList<QString>>> m_clients;
    void processMessage(QString, quint32, QMap<QString, QStringList>);
    void socketDisconnected(quint32);
    quint32 lastId;
    QMap<QString, QStringList> pOp;
};

#endif // WEBSOCKET_H
