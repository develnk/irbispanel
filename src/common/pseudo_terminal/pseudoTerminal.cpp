#include "pseudoTerminal.h"

pseudoTerminal::pseudoTerminal(QObject *parent) :  QObject(parent)
{
    bool res;
    res = QObject::connect(&_obj, SIGNAL(objectIsReady()), this, SLOT(connectObject()), Qt::DirectConnection);
    Q_ASSERT_X (res, "connect", "connection is not established");
    _obj.starting(SIGNAL(finished()), SLOT(terminate()), QThread::HighPriority);
}

pseudoTerminal::~pseudoTerminal(void)
{

}

void pseudoTerminal::connectObject(void)
{
    qDebug() << "Connect";
    bool res;
    QObject::connect(this, &pseudoTerminal::finish, _obj, &OperationsTerminal::terminate);
    res = QObject::connect(this, &pseudoTerminal::sendToTerminal, _obj, &OperationsTerminal::writeTerminal, Qt::DirectConnection);
    Q_ASSERT_X (res, "connect", "connection is not established");
    QObject::connect(_obj, &OperationsTerminal::dataReady, this, &pseudoTerminal::readTerminal);
    //QObject::connect(_obj, &OperationsTerminal::writeTerminal, this, &pseudoTerminal::sendToTerminal);
    QObject::connect(this, &pseudoTerminal::sendBufferToTerminal, _obj, &OperationsTerminal::buffer, Qt::DirectConnection);

    if (buffer.count()) {
        emit sendBufferToTerminal(buffer);
    }
}

void pseudoTerminal::writeToTerminal(const char *txt)
{
    if (_obj.objectIsCreated()) {
        emit sendToTerminal(txt);
    }
    else {
        buffer.append(txt);
    }
    //qDebug() << txt;
}

QString pseudoTerminal::getData() {
  return data;
}
