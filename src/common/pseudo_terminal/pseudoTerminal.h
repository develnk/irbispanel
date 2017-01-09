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
    ThreadedObject <OperationsTerminal> _obj;

public:
    explicit pseudoTerminal(QObject *parent = Q_NULLPTR);
    ~pseudoTerminal();
    quint32 writeToTerminal(QString);
    QString getData(quint32);

public slots:
    void terminate (qint32 i) {emit finish(i);}

private slots:
    void connectObject(void);
    void readTerminal(quint32 req_number, QString *result) {
        results[req_number] = *result;
        emit executed(req_number);
    }

signals:
    void finish(quint32);
    void sendToTerminal(quint32, QString);
    void sendBufferToTerminal(QMap<quint32, QString>);
    void executed(quint32);

private:
    QMap<quint32, QString> buffer;
    QMap<quint32, QString> results;
    quint32 req_number = 0;
};

#endif //IRBISPANEL_PSEUDOTERMINAL_H
