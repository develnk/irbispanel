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
    void writeToTerminal(const char *);
    QString readTerminal(const QString &txt) { data = txt; }
    QString getData();

public slots:
    void terminate (void) {emit finish();}

private slots:
    void connectObject(void);

signals:
    void finish();
    void sendToTerminal(const char*);
    void sendBufferToTerminal(QList<const char*>);

private:
    QString data;
    QList<const char*> buffer;
};

#endif //IRBISPANEL_PSEUDOTERMINAL_H
