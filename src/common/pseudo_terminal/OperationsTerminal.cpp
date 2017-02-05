#include "OperationsTerminal.h"

OperationsTerminal::OperationsTerminal(QObject *parent) :  QObject(parent)
{
    /* initialise expect and tcl */
    Tcl_Interp *interp = Tcl_CreateInterp();
    exp_full_buffer = true;
    exp_match_max = 10000;
    exp_loguser = 0;
    exp_logfile = logFile;

    if(Expect_Init(interp) == TCL_ERROR)
    {
        qDebug() << "Expect failed to initialize.";
        exit(0);
    }
}

void OperationsTerminal::readTerminal()
{
    QString logs(exp_buffer);
    // Read log by line.
    // qDebug() << results.readLine(0);
    qDebug() << exp_buffer;
    emit dataReady(&logs);
    if (!timer_flag) {
        emit finished();
    }
}

void OperationsTerminal::process()
{
    if (timer_flag) {
        timer = new QTimer();
        connect(timer, &QTimer::timeout, this, &OperationsTerminal::execCommand);
        timer->start(1000);
    }
    else {
        execCommand();
    }
}

void OperationsTerminal::execCommand()
{
    // Open a shell with a pipe
    file_descriptor = exp_popen(cmd.toUtf8().data());

    switch (exp_fexpectl(file_descriptor,
                         exp_glob, "cannot create", command_failed,
                         exp_glob, "command not found", command_not_found,
                         exp_glob, "$ ", prompt,
                         exp_end)) {
        case command_failed:
            qDebug() << "Could not create directory";
            break;
        case command_not_found:
            qDebug() << "Command not found";
            break;
        case prompt:
            fprintf(file_descriptor, "%s\r", "exit");
            qDebug() << "Task completed.";
            break;
        default:
            break;
    }

    readTerminal();
}

void OperationsTerminal::setCommand(QString cmd)
{
    this->cmd = cmd;
}

void OperationsTerminal::setTimer(bool timer)
{
    this->timer_flag = timer;
}
OperationsTerminal::~OperationsTerminal()
{
//    delete(timer);
//    delete(logFile);
//    delete(file_descriptor);
}
