#include <QtCore/QMap>
#include <QtCore/QJsonObject>
#include "System.h"
#include "SystemInfo.h"

System::System()
{
    // Set module permissions.
    perms.append("get system info");
}

QStringList System::getPermissions()
{
    return perms;
}

QStringList System::operations()
{
    QStringList operations;
    operations << "getsysinfo";
    return operations;
}

QJsonObject System::execute(quint32 key, QString ses_name, QString ses_id, QVariantMap data)
{
    QJsonObject result;
//    QVariantMap values = data["data"].toMap();
    if (data["method"].toString() == "getsysinfo") {
        SystemInfo info;
        result.insert("data", info.sys_name());
    }
    else if (data["method"].toString() == "getcpu") {
        SystemInfo info;
        result.insert("data", info.cpu_data());
    }

    result.insert("controller", data["controller"].toString());
    result.insert("method", data["method"].toString());
    return result;
}

System::~System()
{

}