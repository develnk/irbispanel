#ifndef IRBISPANEL_PSEUDOTERMINAL_H
#define IRBISPANEL_PSEUDOTERMINAL_H

#include "ThreadedObject.h"
#include "OperationsTerminal.h"
#include <QtCore>
#include <QVariant>

/**
 * Generating new thred and work with pseudo terminal.
 */
class OperationsTerminal;
class pseudoTerminal : public QObject
{
    Q_OBJECT
//    ThreadedObject <OperationsTerminal> _obj;

public:
    explicit pseudoTerminal(QObject *parent = Q_NULLPTR);
    ~pseudoTerminal();
    void writeToTerminal(QString, bool);
    QString getData();

private slots:
//    void connectObject(void);
    void readTerminal(QString *result) {
//        results[req_number] = *result;
        this->result = result;
        emit executed();
    }
    void errorString(QString);

signals:
    void finish();
    void sendToTerminal(quint32, QString);
    void sendBufferToTerminal(QMap<quint32, QString>);
    void executed();

private:
    QString *result;
    QThread *thread;
    OperationsTerminal *operationsTerminal;
};

#endif //IRBISPANEL_PSEUDOTERMINAL_H
