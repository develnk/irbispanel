#ifndef IRBISPANEL_PROCESS_H
#define IRBISPANEL_PROCESS_H


#include <QtCore/QString>
#include <QtCore/QStringList>
#include <QtCore/QObject>
class Process : public QObject
{
    Q_OBJECT
public:
    explicit Process(QString *program = Q_NULLPTR, QStringList *arguments = Q_NULLPTR);
    ~Process();
    QByteArray execute();

private:
    QString *program;
    QStringList *arguments;
};


#endif //IRBISPANEL_PROCESS_H
