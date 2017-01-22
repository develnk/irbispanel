#ifndef IRBISPANEL_SYSTEMINFO_H
#define IRBISPANEL_SYSTEMINFO_H

#include <QtCore>
#include <QDateTime>
#include <src/common/pseudo_terminal/ThreadedObject.h>
#include <src/common/pseudo_terminal/pseudoTerminal.h>

class SystemInfo : public QObject {
    Q_OBJECT
    pseudoTerminal terminal;

public:
    explicit SystemInfo(QObject *parent = Q_NULLPTR);
    ~SystemInfo();
    QString sys_name();
    QString cpu_data();
    QJsonObject cpu_load(QString);
    void execute_cmd(QString, QVariantMap);

public slots:
    void readyData(quint32);

signals:
    void endExecute(QJsonObject, QString);

private:
    QMap<quint32, QVariantMap> exec_commands;
};


#endif //IRBISPANEL_SYSTEMINFO_H
