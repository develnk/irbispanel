#include <errno.h>
#include <sys/time.h>
#include <sys/types.h>
#include <unistd.h>
#include <iostream>
#include <utmp.h>
#include <pty.h>
#include <stdlib.h>
#include <stdio.h>
#include <malloc.h>
#include "OperationsTerminal.h"

OperationsTerminal::OperationsTerminal(QObject *parent) :  QObject(parent)
{
    char slaveName[255];
    pid_t pid = forkpty(&fdm, slaveName, NULL, NULL);
    if (pid == -1) {
        perror("forkpty");
        exit(1);
    } else if (pid == 0) {
//        execlp("bash", "/bin/bash", NULL);
        execlp("/bin/sh", "sh", NULL);
//        char *conString = (char *) malloc(strlen("/bin/sh"));
//        sprintf(conString, "%s", "/bin/sh");
//        system(conString);
//        perror("execlp");
        exit(1);
    }

//    QObject::connect(this, &OperationsTerminal::terminalWritten, this, &OperationsTerminal::readTer);
}

OperationsTerminal::~OperationsTerminal()
{

}

void OperationsTerminal::readTer()
{
    terminalData.clear();
    char buf[1024]; int n;
    while (n = read(fdm, buf, 1023)) {
        if (n == -1) {
            if (errno == EAGAIN) {
                sleep(1);
                continue;
            }
            break;
        }
        buf[n] = '\0';
        write(1, buf, strlen(buf));
        terminalData.append(buf);
    }

    qDebug() << terminalData;
}

/**
 * Close tty.
 */
void OperationsTerminal::terminate()
{

}

QString OperationsTerminal::errorTerminal(int fd)
{
    return QString();
}

void OperationsTerminal::writeTerminal(const char *cmd)
{
//    const char* cmd = "ls -l\n\004";

    const char *c = "\r";
    write(fdm, cmd, strlen(cmd));
    write(fdm, c, 1);
//    if (write(fdm, txt, strlen(txt)) == -1) {
//        perror("write");
//        exit(1);
//    }
//    qDebug() << cmd;
    emit terminalWritten();
}

QString OperationsTerminal::readTerminal()
{
    return terminalData;
}
void OperationsTerminal::buffer(QList<const char*> buff)
{
    qDebug() << "Buff" << buff;
    if (buff.count()) {
        while (!buff.isEmpty()) {
            const char *txt = buff.takeFirst();
            qDebug() << "From Buffer" << txt;
            writeTerminal(txt);
            readTer();
        }
    }
}
