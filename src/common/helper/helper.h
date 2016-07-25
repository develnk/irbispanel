#ifndef TEST2_HELPER_H
#define TEST2_HELPER_H

#include <QByteArray>
#include <QHash>
#include <QJsonDocument>
#include <QJsonObject>
#include <QJsonArray>
#include <QStringList>
#include <QMetaEnum>
#include <iostream>
#include "QtSql"
#include "src/common/request/RequestInterface.h"
#include "src/common/usingleton.h"

class   Helper;
#define helper Helper::instance()

class Helper: public uSingleton<Helper>
{
public:
    Helper();
    QVariantMap parse(const QByteArray &);
    QByteArray response(QJsonObject);
    QHash<QString, RequestInterface*> pluginMap;
    QMap<QString, QStringList> pluginOp;
    void checkExistPermissions(QStringList, QString);
    QString GetRandomString(const quint32) const;

private:
};


#endif //TEST2_HELPER_H