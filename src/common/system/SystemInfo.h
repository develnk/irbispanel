#ifndef IRBISPANEL_SYSTEMINFO_H
#define IRBISPANEL_SYSTEMINFO_H

#include <QtCore>
#include <QDateTime>
#include <src/common/pseudo_terminal/ThreadedObject.h>
#include <src/common/pseudo_terminal/pseudoTerminal.h>

class SystemInfo : public QObject {
    Q_OBJECT

public:
    explicit SystemInfo(QObject *parent = Q_NULLPTR);
    ~SystemInfo();
    QJsonObject cpu_load(QString);
    void execute_cmd(QString, QVariantMap);

public slots:
    void readyData();

signals:
    void endExecute(QJsonObject, QString);

private:
    QVariantMap exec_command;
    pseudoTerminal *terminal;
};


#endif //IRBISPANEL_SYSTEMINFO_H
