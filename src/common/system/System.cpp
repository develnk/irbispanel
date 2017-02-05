#include <QtCore/QMap>
#include <QtCore/QJsonObject>
#include "System.h"

System::System(QObject *parent) : QObject(parent)
{
    // Set module permissions.
    perms.append("get system info");
    connect(&info, &SystemInfo::endExecute, this, &System::readyData, Qt::DirectConnection);
}

QStringList System::getPermissions()
{
    return perms;
}

QStringList System::operations()
{
    QStringList operations;
    operations << "getsysinfo";
    operations << "getcpu";
    operations << "get_cpu_load_online";
    return operations;
}

void System::execute(quint32 key, QString ses_name, QString ses_id, QVariantMap data)
{
    if (data["method"].toString() == "getsysinfo") {
        info.execute_cmd("sys_name", data);
    }
    else if (data["method"].toString() == "getcpu") {
        info.execute_cmd("cpu_info", data);
    }
    else if (data["method"].toString() == "get_cpu_load_online") {
        info.execute_cmd("cpu_load", data);
    }
}


System::~System()
{
    delete(&info);
}

void System::readyData(QJsonObject result, QString method_name)
{
    emit sendResult(result, method_name);
}
