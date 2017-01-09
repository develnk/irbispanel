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

    QObject::connect(this, &OperationsTerminal::endExecute, this, &OperationsTerminal::readTerminal);
}

void OperationsTerminal::readTerminal(quint32 req_number)
{
    QString logs(exp_buffer);
    // Read log by line.
    // qDebug() << results.readLine(0);
    qDebug() << exp_buffer;
    emit dataReady(req_number, &logs);
}

void OperationsTerminal::writeTerminal(quint32 req_number, QString cmd)
{
    started = true;
    // Open a shell with a pipe
    file_descriptor = exp_popen(cmd.toUtf8().data());

    switch (exp_fexpectl(file_descriptor,
                         exp_glob, "cannot create", command_failed,
                         exp_glob, "command not found", command_not_found,
                         exp_glob, "$ ", prompt,
                         exp_end)) {
        case command_failed:
            qDebug() << "Could not create directory";
            success = false;
            break;
        case command_not_found:
            qDebug() << "Command not found";
            success = false;
            break;
        case prompt:
            fprintf(file_descriptor, "%s\r", "exit");
            qDebug() << "Task completed.";
            break;
        default:
            break;
    }

    emit endExecute(req_number);
}

void OperationsTerminal::buffer(QMap<quint32, QString> buff)
{
    qDebug() << "Buff" << buff.values();
    if (buff.count()) {
        QMapIterator<quint32, QString> i(buff);
        while (i.hasNext()) {
            i.next();
            qDebug() << "From Buffer" << i.value();
            writeTerminal(i.key(), i.value());
        }
    }
}

OperationsTerminal::~OperationsTerminal()
{

}
