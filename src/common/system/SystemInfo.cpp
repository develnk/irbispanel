#include "SystemInfo.h"
#include "../process/Process.h"
#include <QDebug>

SystemInfo::SystemInfo()
{

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

SystemInfo::~SystemInfo()
{

}
