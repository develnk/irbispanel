#ifndef IRBISPANEL_THREADEDOBJECT_H
#define IRBISPANEL_THREADEDOBJECT_H

#include <QtCore>
#include <QThread>
#include "ThreadedObjectBase.h"

/**
 * Templating class for thread.
 */
template<class T>
class ThreadedObject: public ThreadedObjectBase
{
protected:
    // Object, executing int new thread.
    T *_obj;

public:
    ThreadedObject(QObject *parent = 0)
        : ThreadedObjectBase(parent), _obj(0)
    {}

    // Run new thread.
    void starting(const char *FinishedSignal = 0, const char *TerminateSlot = 0, QThread::Priority Priority = QThread::InheritPriority,  bool ToDeleteLaterThread = true, bool ToDeleteLaterObject = true)
    {
        // Remembering signal name: "ending works object".
        _finished_signal = FinishedSignal;
        // Remembering slot name: "end of work".
        _terminate_slot = TerminateSlot;
        // Remembering installing deferred object deletion.
        _to_delete_later_object = ToDeleteLaterObject;
        // Creating object.
        start(Priority);
    }

    void run(void)
    {
        initObject(_obj = new T);
        exec();
    }

    // State. Flag indicates that ready or not ready object to works.
    bool objectIsCreated(void) const
    { return _obj != 0; }
    // Pointer to object.
    T *ptr(void) { return reinterpret_cast <T *> (_obj); }
    // Pointer to constant object.
    const T *cptr(void) const { return reinterpret_cast <const T *> (_obj); }

    // Overload.
    // Pointer to object.
    operator T *(void) { return ptr(); }
    // Pointer to object.
    T *operator->(void) { return ptr(); }
    // Pointer to constant object.
    operator const T *(void) const { return cptr(); }
    // Pointer to constant object.
    const T *operator->(void) const { return cptr(); }
};


#endif //IRBISPANEL_THREADEDOBJECT_H
