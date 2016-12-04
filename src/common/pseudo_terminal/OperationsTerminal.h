#ifndef IRBISPANEL_OPERATIONSTERMINAL_H
#define IRBISPANEL_OPERATIONSTERMINAL_H

#include <QtCore>

class OperationsTerminal : public QObject
{
    Q_OBJECT
    int fdm;

public:
    OperationsTerminal(QObject *parent = Q_NULLPTR);
    ~OperationsTerminal(void);
    QString readTerminal();

public slots:
    void terminate();
    void writeTerminal(const char*);
    void buffer(QList<const char*>);
    QString errorTerminal(int);

signals:
    void finished();
    void terminalWritten();
    QString dataReady(const QString &txt);

private:
    QString terminalData;
    void readTer();

};


#endif //IRBISPANEL_OPERATIONSTERMINAL_H
