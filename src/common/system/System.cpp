#include <QtCore/QMap>
#include <QtCore/QJsonObject>
#include "System.h"

System::System(QObject *parent) : QObject(parent)
{
    // Set module permissions.
    perms.append("get system info");
    QObject::connect(&info, &SystemInfo::endExecute, this, &System::readyData, Qt::DirectConnection);
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
        result.insert("data", info.sys_name());
    }
    else if (data["method"].toString() == "getcpu") {
        result.insert("data", info.cpu_data());
    }
    else if (data["method"].toString() == "get_cpu_load_online") {
        info.execute_cmd("cpu_load", data);
        //result.insert("data");
    }
}


System::~System()
{

}
void System::readyData(QJsonObject result, QString method_name)
{
    emit sendResult(result, method_name);
}
