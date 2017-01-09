#include "pseudoTerminal.h"

pseudoTerminal::pseudoTerminal(QObject *parent) :  QObject(parent)
{
    bool res;
    res = QObject::connect(&_obj, SIGNAL(objectIsReady()), this, SLOT(connectObject()), Qt::DirectConnection);
    Q_ASSERT_X (res, "connect", "connection is not established");
    _obj.starting(SIGNAL(finish()), SLOT(terminate()), QThread::HighPriority);
}

pseudoTerminal::~pseudoTerminal(void)
{

}

void pseudoTerminal::connectObject(void)
{
    qDebug() << "Connect";
    bool res;
    QObject::connect(this, &pseudoTerminal::finish, _obj, &OperationsTerminal::endExecute, Qt::DirectConnection);
    res = QObject::connect(this, &pseudoTerminal::sendToTerminal, _obj, &OperationsTerminal::writeTerminal, Qt::DirectConnection);
    Q_ASSERT_X (res, "connect", "connection is not established");
    QObject::connect(_obj, &OperationsTerminal::dataReady, this, &pseudoTerminal::readTerminal, Qt::DirectConnection);
    //QObject::connect(_obj, &OperationsTerminal::writeTerminal, this, &pseudoTerminal::sendToTerminal);
    QObject::connect(this, &pseudoTerminal::sendBufferToTerminal, _obj, &OperationsTerminal::buffer, Qt::DirectConnection);

    if (buffer.count()) {
        emit sendBufferToTerminal(buffer);
    }
}

quint32 pseudoTerminal::writeToTerminal(QString txt)
{
    results.insert(req_number++, "");
    if (_obj.objectIsCreated()) {
        emit sendToTerminal(req_number, txt);
    }
    else {
        buffer[req_number] = txt;
    }

    return req_number;
}

QString pseudoTerminal::getData(quint32 r_number)
{
    QString result = results[r_number];
    results.remove(r_number);
    return result;
}
