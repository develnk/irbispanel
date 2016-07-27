#ifndef IRBISPANEL_SYSTEMINFO_H
#define IRBISPANEL_SYSTEMINFO_H

#include <QtCore/QString>
#include <QtCore/QObject>

class SystemInfo {
public:
    explicit SystemInfo();
    ~SystemInfo();
    QString sys_name();
    QString cpu_data();
};


#endif //IRBISPANEL_SYSTEMINFO_H
