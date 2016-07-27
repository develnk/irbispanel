#include "Process.h"
#include <QtCore/QProcess>

Process::Process(QString *program, QStringList *arguments)
{
    Process::program = program;
    Process::arguments = arguments;
}

QByteArray Process::execute()
{
    QProcess process;
    process.start(*program, *arguments);
    process.waitForFinished();
    QByteArray output = process.readAll();
    process.close();
    return output;
}

Process::~Process() {
    delete(program);
    delete(arguments);
}
