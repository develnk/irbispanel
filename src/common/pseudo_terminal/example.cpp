#include <QtWidgets>
#include <QtCore>

#include "ThreadedObject.h"

// **
// **  Выполнение операции
// **

class Operation: public QObject
{
Q_OBJECT

    int *Int;        // некоторая динамическая переменная
    QTimer _tmr;        // таймер
    int _int_timer;    // внутренний таймер

public:
    Operation(void)
    { Int = new int(5); }            // некоторый конструктор
    ~Operation(void)
    { if (Int) delete Int; }        // некоторый деструктор

signals:
    void addText(const QString &txt);        // сигнал "добавление текста"
    void finished();                        // сигнал "остановка работы"

public slots:
    void terminate()            // досрочная остановка
    {
        killTimer(_int_timer);        // остановка внутреннего таймера
        _tmr.stop();                // остановка внешенго таймера
        delete Int;                    // удаление переменной
        Int = 0;                    // признак завершения работы
        emit finished();            // сигнал завергения работы
    }
    void doAction(void)        // некоторое действие
    {
        bool res;
        emit addText(QString("- %1 -").arg(*Int));
        res = QObject::connect(&_tmr, &QTimer::timeout, this, &Operation::timeout);
        Q_ASSERT_X (res, "connect", "connection is not established");    // связывание внешнего таймера
        _tmr.start(2000);            // запуск внешнего таймера
        thread()->sleep(1);        // выжидание 1 сек...
        timeout();                    // ... выдача состояния ...
        startTimer(2000);            // ... и установка внутреннего таймера
    }
protected:
    void timerEvent(QTimerEvent *ev)
    { timeout(); }        // внутренний таймер

private slots:
    void timeout(void)
    {
        if (!Int || !*Int)                                    // поток закрывается?
            return;                                            // ... выход
        --*Int;                                                // уменьшение счетчика
        emit addText(QString("- %1 -").arg(*Int));        // выдача значения

        if (!Int || !*Int)                                    // таймер закрыт?
            emit finished();                                // ... выход

    }

};

// **
// **  Объект, взаимодействующий с потоком
// **

class App: public QObject
{
Q_OBJECT

    ThreadedObject<Operation> _obj;        // объект-поток
    QPushButton _btn;                        // кнопка

protected:
    void timerEvent(QTimerEvent *ev)
    {
        bool res;                            // признак успешности установки сигналов-слотов
        killTimer(ev->timerId());            // остановка таймера
        res = QObject::connect(&_obj, SIGNAL (objectIsReady()), this, SLOT (connectObject()));
        Q_ASSERT_X (res, "connect", "connection is not established");    // установка связей с объектом
        _obj.starting(SIGNAL (finished()),
                      SLOT (terminate()),
                      QThread::HighPriority);                    // запуск потока с высоким приоритетом
    }

private slots:
    void setText(const QString &txt)
    { _btn.setText(txt); }        // установка надписи на кнопке
    void connectObject(void)        // установка связей с объектом
    {
        bool res;                    // признак успешности установки сигналов-слотов
        res = QObject::connect(this, &App::finish, _obj, &Operation::terminate);
        Q_ASSERT_X (res,
                    "connect",
                    "connection is not established");    // закрытие этого объекта закрывает объект в потоке
        res = QObject::connect(this, &App::startAction, _obj, &Operation::doAction);
        Q_ASSERT_X (res, "connect", "connection is not established");    // установка сигнала запуска действия
        res = QObject::connect(_obj, &Operation::finished, this, &App::finish);
        Q_ASSERT_X (res, "connect", "connection is not established");    // конец операции завершает работу приложения
        res = QObject::connect(_obj, &Operation::addText, this, &App::setText);
        Q_ASSERT_X (res, "connect", "connection is not established");    // установка надписи на кнопку
        res = QObject::connect(&_btn, &QPushButton::clicked, _obj, &Operation::terminate);
        Q_ASSERT_X (res, "connect", "connection is not established");    // остановка работы потока

        _btn.show();                // вывод кнопки
        emit startAction();        // запуск действия
    }

public slots:
    void terminate(void)
    { emit finish(); }        // завершение работы приложения

signals:
    void startAction(void);        // сигнал "запуск действия"
    void finish(void);                // сигнал "завершение работы"
};

// **
// **  Точка входа в программу
// **

int main(int argc, char **argv)
{
    QApplication app(argc, argv);        // приложение
    App a;                                // объект
    bool res;                            // признак успешности операции

    a.startTimer(0);                    // вызов функции таймера объекта при включении цикла обработки сообщений
    res = QObject::connect(&a, SIGNAL (finish()), &app, SLOT (quit()));
    Q_ASSERT_X (res, "connect", "connection is not established");    // окончание работы объекта закрывает приложение
    res = QObject::connect(&app, SIGNAL (lastWindowClosed()), &a, SLOT (terminate()));
    Q_ASSERT_X (res, "connect", "connection is not established");    // окончание работы приложения закрывает объект

    return app.exec();                    // запуск цикла обработки сообщений
}

#include "main.moc"