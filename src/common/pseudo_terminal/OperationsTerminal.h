#ifndef IRBISPANEL_OPERATIONSTERMINAL_H
#define IRBISPANEL_OPERATIONSTERMINAL_H

#include <QtCore>
#include <QTextStream>
#include <iostream>
#include <errno.h>
#include <sys/time.h>
#include <sys/types.h>
#include <unistd.h>
#include <tcl.h>
#include <expect_tcl.h>
#include <expect.h>
#include <wait.h>
using namespace std;

class OperationsTerminal : public QObject
{
    Q_OBJECT;

public:
    OperationsTerminal(QObject *parent = Q_NULLPTR);
    ~OperationsTerminal(void);

public slots:
    void terminate(void){emit finish();};
    void writeTerminal(quint32, QString);
    void buffer(QMap<quint32, QString>);

signals:
    void endExecute(quint32);
    void dataReady(quint32, QString *txt);
    void finish(void);

private:
    void readTerminal(quint32);
    FILE *file_descriptor;
    FILE *logFile;
    enum types { denied, invalid, command_not_found, command_failed, prompt };
    bool success = true;
    bool finished = false;
    bool started = false;

};


#endif //IRBISPANEL_OPERATIONSTERMINAL_H
