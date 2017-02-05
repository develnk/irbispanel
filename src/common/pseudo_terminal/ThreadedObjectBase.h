#ifndef IRBISPANEL_THREADEDOBJECTBASE_H
#define IRBISPANEL_THREADEDOBJECTBASE_H

#include <QtCore>
#include <QThread>

/**
 * Base class for thread.
 */
class ThreadedObjectBase: public QThread
{
    Q_OBJECT

protected:
    // Signal name "ended work object".
    const char *_finished_signal;
    // Slot name "stoped work".
    const char *_terminate_slot;
    // Set deferred deleting object.
    bool _to_delete_later_object;

    void initObject(QObject *obj)
    {
        bool res;
        // Set signal: "work of object is ended"?
        if (_finished_signal)
        {
            res = connect(obj, _finished_signal, this, SLOT(quit()));
            Q_ASSERT_X (res, "connect", "connection is not established");
            // By end work, thread be finished.
        }
        // Set slot: "end works"?
        if (_terminate_slot)
        {
            res = connect(this, SIGNAL(finished()), obj, _terminate_slot);
            Q_ASSERT_X (res, "connect", "connection is not established");
            // Before work finish, object slot "end works" could be called.
        }
        emit objectIsReady();
    }

public:
    ThreadedObjectBase(QObject *parent = 0) : QThread(parent) {}

    signals:
    // Object is launched.
    void objectIsReady(void);
};

#endif //IRBISPANEL_THREADEDOBJECTBASE_H
