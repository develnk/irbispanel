cmake_minimum_required(VERSION 3.6)
set (PROJECT IRBISPANEL)
project(${PROJECT})

set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++14 -Wall -fPIC -L/opt/qjson/lib -lqjson-qt5 -L/usr/lib -ltcl -lutil -L/usr/lib/expect5.45 -lexpect5.45")

# Find includes in corresponding build directories
set(CMAKE_INCLUDE_CURRENT_DIR ON)
# Instruct CMake to run moc automatically when needed.
set(CMAKE_AUTOMOC ON)

set(CMAKE_CXX_STANDARD 14)

set(CMAKE_PREFIX_PATH "/usr/local/Qt-5.8.0")

set(REQUIRED_QT_VERSION "5.8")
find_package(Qt5 ${REQUIRED_QT_VERSION} CONFIG REQUIRED Core WebSockets Sql)
#include_directories(${Qt5Widgets_INCLUDE_DIRS})
#include_directories(${Qt5WebSockets_INCLUDE_DIRS})

set(CMAKE_LIBRARY_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/plugins)
set(CMAKE_ARCHIVE_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/plugins)
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/plugins)

add_definitions(${Qt5Widgets_DEFINITIONS})
add_definitions(${QT_DEFINITIONS})
add_definitions(-DQT_PLUGIN)
add_definitions(-DQT_SHARED)
add_definitions(-std=c++14)

#qt5_generate_moc(main.cpp main.moc)

set (HEADERS websocket.h app.h
    src/common/user/SystemUser.h
    src/common/session/session.h
    src/common/usingleton.h
    src/common/helper/helper.h
    src/common/request/Request.h
    src/common/request/RequestInterface.h
    src/common/PluginCommands.h
    src/common/process/Process.h
    src/common/system/SystemInfo.h
    src/common/system/System.h
    src/common/pseudo_terminal/pseudoTerminal.h
    src/common/pseudo_terminal/OperationsTerminal.h
    src/common/pseudo_terminal/ThreadedObjectBase.h)

set(SOURCE main.cpp websocket.cpp app.cpp
    src/common/user/SystemUser.cpp
    src/common/session/session.cpp
    src/common/helper/helper.cpp
    src/common/request/Request.cpp
    src/common/process/Process.cpp
    src/common/system/SystemInfo.cpp
    src/common/system/System.cpp
    src/common/pseudo_terminal/pseudoTerminal.cpp
    src/common/pseudo_terminal/OperationsTerminal.cpp)

add_executable(${PROJECT} ${HEADERS} ${SOURCE})
qt5_use_modules(${PROJECT} WebSockets)
qt5_use_modules(${PROJECT} Core)


# Use the Sql module from Qt 5.
target_link_libraries(${PROJECT} Qt5::Sql)