#ifndef TEST2_APP_H
#define TEST2_APP_H

#include <QObject>
#include <QSqlDatabase>
#include <QDir>
#include <QStringList>
#include "websocket.h"
#include "src/common/request/RequestInterface.h"
#include "src/common/pseudo_terminal/pseudoTerminal.h"

class app : public QObject
{
    Q_OBJECT
public:
    explicit app(QObject *parent = Q_NULLPTR);
    ~app();

    QHash<QString, QVariant> names;
    QHash<QString, QVariant> versions;
    QHash<QString, QVariantList> dependencies;
    pseudoTerminal *terminal;

public slots:
    void onReceiveMessageFromPlugin(const quint32, const QString, const QString, QVariantMap &data);

private:
    QSqlDatabase db;
    WebSocket server;
    void loadPlugins();

    QDir pluginsDir;
    RequestInterface *requestInterface;
};


#endif //TEST2_APP_H
