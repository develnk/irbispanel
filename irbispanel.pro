QT += core websockets sql
QT -= gui

TARGET = irbispanel
CONFIG += console
CONFIG -= app_bundle

QMAKE_CXXFLAGS += -std=c++14 -Wall -Wextra -fPIC

LIBS += -L/opt/qjson/lib -lqjson-qt5 -lutil

TEMPLATE = app

SOURCES += main.cpp \
    websocket.cpp \
    app.cpp \
    src/common/user/SystemUser.cpp \
    src/common/session/session.cpp \
    src/common/helper/helper.cpp \
    src/common/request/Request.cpp \
    src/common/process/Process.cpp \
    src/common/system/SystemInfo.cpp \
    src/common/system/System.cpp \
    src/common/pseudo_terminal/pseudoTerminal.cpp \
    src/common/pseudo_terminal/OperationsTerminal.cpp

HEADERS += \
    websocket.h \
    app.h \
    src/common/user/SystemUser.h \
    src/common/session/session.h \
    src/common/usingleton.h \
    src/common/helper/helper.h \
    src/common/request/Request.h \
    src/common/request/RequestInterface.h \
    src/common/PluginCommands.h \
    src/common/process/Process.h \
    src/common/system/SystemInfo.h \
    src/common/system/System.h \
    src/common/pseudo_terminal/pseudoTerminal.h \
    src/common/pseudo_terminal/OperationsTerminal.h \
    src/common/pseudo_terminal/ThreadedObjectBase.h
