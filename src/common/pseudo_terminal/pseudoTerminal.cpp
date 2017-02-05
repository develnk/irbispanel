#include "pseudoTerminal.h"

pseudoTerminal::pseudoTerminal(QObject *parent) :  QObject(parent)
{
    thread = new QThread;
    operationsTerminal = new OperationsTerminal();
}

pseudoTerminal::~pseudoTerminal(void)
{
    thread->terminate();
    delete(thread);
    delete(operationsTerminal);
}

void pseudoTerminal::writeToTerminal(QString txt, bool timer = false)
{
    operationsTerminal->setCommand(txt);
    operationsTerminal->setTimer(timer);
    operationsTerminal->moveToThread(thread);
    connect(operationsTerminal, &OperationsTerminal::error, this, &pseudoTerminal::errorString);
    connect(operationsTerminal, &OperationsTerminal::dataReady, this, &pseudoTerminal::readTerminal, Qt::DirectConnection);
    connect(thread, SIGNAL(started()), operationsTerminal, SLOT(process()));
    connect(operationsTerminal, SIGNAL(finished()), thread, SLOT(quit()));
    connect(operationsTerminal, SIGNAL(finished()), operationsTerminal, SLOT(deleteLater()));
    connect(thread, SIGNAL(finished()), thread, SLOT(deleteLater()));
    thread->start();
}

QString pseudoTerminal::getData()
{
    return *result;
}

void pseudoTerminal::errorString(QString error)
{
    qDebug() << error;
}
