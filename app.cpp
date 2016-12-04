#include "app.h"
#include "src/common/helper/helper.h"
#include "src/common/session/session.h"
#include "src/common/user/SystemUser.h"
#include "src/common/request/RequestInterface.h"
#include "src/common/PluginCommands.h"
#include <QPluginLoader>
#include <QDebug>

using PluginCommands::keys;

app::app(QObject *parent)
    :
    QObject(parent),
    server(1234)
{
    // Connect to database.
    db = QSqlDatabase::addDatabase("QSQLITE");
    db.setDatabaseName("admin_plesk.sqlite3");
    if (!db.open()) {
        qApp->exit(1);
    }

    // Loading plugins.
    loadPlugins();
    // Create a pseudoTerminal object.
    terminal = new pseudoTerminal();
    const char* cmd = "ls -l";
    const char* cmd2 = "date";
    terminal->writeToTerminal(cmd2);
    terminal->writeToTerminal(cmd);
    terminal->writeToTerminal(cmd2);
//    thread()->sleep(2);
//    terminal->writeToTerminal(cmd);
    //qDebug() << terminal->getData();
}


void app::loadPlugins()
{
    pluginsDir = QDir("plugins");

    //Helper *pp = reinterpret_cast<Helper *>(helper.classPointers["helper"]);
    //qDebug() << "Random: " << pp->GetRandomString(31);
    QStringList allFolders = pluginsDir.entryList(QDir::Dirs | QDir::NoDotAndDotDot);
    QStringList::Iterator it;

    it = allFolders.begin();
    while (it != allFolders.end()) {
        pluginsDir.cd(*it);
        QFileInfoList x = pluginsDir.entryInfoList(QDir::Files);
        for(int i = 0; i < x.size(); ++i) {
            QFileInfo file = x.at(i);
            QString filePath = file.absoluteFilePath();
            if(!QLibrary::isLibrary(filePath)) {
                continue;
            }

            QPluginLoader *loader = new QPluginLoader(filePath);
            QObject *plugin = loader->instance();
            if (plugin) {
                // @todo Check it!
                QString name = loader->metaData().value("MetaData").toObject().value("name").toString();
                names.insert(filePath, loader->metaData().value("MetaData").toObject().value("name").toVariant());
                versions.insert(filePath, loader->metaData().value("MetaData").toObject().value("version").toVariant());
                dependencies.insert(filePath, loader->metaData().value("MetaData").toObject().value("dependencies").toArray().toVariantList());

                requestInterface = qobject_cast<RequestInterface *>(plugin);
                connect(plugin, SIGNAL(sendMessage(const quint32, const QString, const QString, QVariantMap &)), this, SLOT(onReceiveMessageFromPlugin(const quint32, const QString, const QString, QVariantMap &)));

                helper.pluginMap.insert(name, requestInterface);
                helper.pluginOp.insert(name, requestInterface->operations());
                // Load plugin permissions.
                helper.checkExistPermissions(requestInterface->getPermissions(), name);
                qDebug() << qPrintable(name.toUtf8()) << "loaded \n";
                qDebug() << helper.pluginMap.keys();
            }

            delete loader;
        }
        pluginsDir.cd("../");
        ++it;
    }
}

void app::onReceiveMessageFromPlugin(const quint32 key, const QString ses_name, const QString ses_id, QVariantMap &data)
{
    if (data.contains("key")) {
        switch (data["key"].toInt()) {
            case keys::ses_create: {
                data["ses_id"] = session.writeSession(key, data["uid"].toUInt(), ses_name);
                break;
            }
            case keys::ses_delete: {

                break;
            }
            case keys::current_user: {

                break;
            }
            default: {
                // Error.
            }
        }
    }
}

app::~app() {

}
