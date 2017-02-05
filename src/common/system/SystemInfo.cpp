#include "SystemInfo.h"
#include "../process/Process.h"

SystemInfo::SystemInfo(QObject *parent) : QObject(parent)
{

}

QJsonObject SystemInfo::cpu_load(QString request)
{
    QRegExp rx("\n");
    QStringList myStringList = request.split(rx);
    QRegExp res("(\\d+)");
    QStringList cpuLoadList;
    int pos = 0;
    while ((pos = res.indexIn(myStringList[0], pos)) != -1) {
      cpuLoadList << res.cap(1);
      pos += res.matchedLength();
    }
    float cpu_load = 0;
    float one = cpuLoadList[0].toInt() + cpuLoadList[1].toInt() + cpuLoadList[2].toInt();
    float two = cpuLoadList[0].toInt() + cpuLoadList[1].toInt() + cpuLoadList[2].toInt() + cpuLoadList[3].toInt();
    cpu_load = one / two * 100;
    qint64 timestamp = QDateTime::currentMSecsSinceEpoch() / 1000;
    QJsonObject object {{QString::number(timestamp), cpu_load}};
    return object;
}

void SystemInfo::readyData()
{
    QString method_name;
    QJsonObject result;
    QJsonObject data;
    QString request(terminal->getData());
    method_name = exec_command["method"].toString();
    if (method_name == "get_cpu_load_online") {
        data = cpu_load(request);
    }
    else {
        data.insert(method_name, {{request}});
    }

    result.insert("method", method_name);
    result.insert("controller", exec_command["controller"].toString());
    result.insert("data", data);
    exec_command.clear();
    emit endExecute(result, method_name);
}

SystemInfo::~SystemInfo()
{
    delete(&terminal);
}

void SystemInfo::execute_cmd(QString cmd_name, QVariantMap data)
{
    terminal = new pseudoTerminal();
    connect(terminal, &pseudoTerminal::executed, this, &SystemInfo::readyData, Qt::DirectConnection);
    this->exec_command = data;

    if (cmd_name == "cpu_load") {
        QString cmd("cat /proc/stat");
        terminal->writeToTerminal(cmd, true);
    }
    else if(cmd_name == "cpu_info") {
        QString cmd("lscpu");
        terminal->writeToTerminal(cmd, false);
    }
    else if(cmd_name == "sys_name") {
        QString cmd("uname -a");
        terminal->writeToTerminal(cmd, false);
    }
}
