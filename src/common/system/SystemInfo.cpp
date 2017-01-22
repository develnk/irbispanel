#include "SystemInfo.h"
#include "../process/Process.h"

SystemInfo::SystemInfo(QObject *parent) : QObject(parent)
{
    QObject::connect(&terminal, &pseudoTerminal::executed, this, &SystemInfo::readyData, Qt::DirectConnection);
}

QString SystemInfo::sys_name()
{
    QString program = QString("uname");
    QStringList arguments;
    arguments << "-a";
    Process *process = new Process(&program, &arguments);
    QString result(process->execute());
    return result;
}

QString SystemInfo::cpu_data()
{
    QString program = QString("lscpu");
    QStringList arguments;
    Process *process = new Process(&program, &arguments);
    QString result(process->execute());
    return result;
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

void SystemInfo::readyData(quint32 r_number)
{
    QString method_name;
    QJsonObject result;
    QJsonObject data;
    QString request(terminal.getData(r_number));
    if (exec_commands.contains(r_number)) {
        method_name = exec_commands.value(r_number)["method"].toString();
        if (method_name == "get_cpu_load_online") {
            data = cpu_load(request);
        }
    }

    result.insert("method", method_name);
    result.insert("controller", exec_commands.value(r_number)["controller"].toString());
    result.insert("data", data);
    exec_commands.remove(r_number);
    emit endExecute(result, method_name);
}

SystemInfo::~SystemInfo()
{

}

void SystemInfo::execute_cmd(QString cmd_name, QVariantMap data)
{
    if (cmd_name == "cpu_load") {
        QString cmd("cat /proc/stat");
        quint32 r_number = terminal.setReqNumber();
        exec_commands.insert(r_number, data);
        terminal.writeToTerminal(cmd);
    }
}
