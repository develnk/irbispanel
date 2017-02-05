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
    ~OperationsTerminal();
    void setCommand(QString);
    void setTimer(bool);

public slots:
//    void terminate(void){emit finished();};
//    void writeTerminal(quint32, QString);
//    void buffer(QMap<quint32, QString>);
    void process();

signals:
    void dataReady(QString *txt);
    void finished();
    void error(QString err);

private:
    void readTerminal();
    void execCommand();
    FILE *file_descriptor;
    FILE *logFile;
    enum types { denied, invalid, command_not_found, command_failed, prompt };
    QString cmd;
    bool timer_flag;
    QTimer *timer;
};


#endif //IRBISPANEL_OPERATIONSTERMINAL_H
