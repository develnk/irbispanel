cmake_minimum_required(VERSION 3.6)
set (PROJECT User)
project(${PROJECT})

set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++14 -Wall -fPIC -std=c++14")

# Find includes in corresponding build directories
set(CMAKE_INCLUDE_CURRENT_DIR ON)
# Instruct CMake to run moc automatically when needed.
set(CMAKE_AUTOMOC ON)

set(CMAKE_CXX_STANDARD 14)

set(CMAKE_PREFIX_PATH "/usr/local/Qt-5.7.0")

set(REQUIRED_QT_VERSION "5.7")
find_package(Qt5 ${REQUIRED_QT_VERSION} CONFIG REQUIRED Core Sql)

set(CMAKE_LIBRARY_OUTPUT_DIRECTORY ../../../plugins/${PROJECT})
set(CMAKE_ARCHIVE_OUTPUT_DIRECTORY ../../../plugins/${PROJECT})
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ../../../plugins/${PROJECT})
set(CMAKE_USE_RELATIVE_PATHS TRUE)

include_directories (
    ${CMAKE_SOURCE_DIR} ${CMAKE_CURRENT_BINARY_DIR}
    ${Qt5Widgets_INCLUDE_DIRS}, ${Qt5Widgets_LIBRARIES}})

add_definitions(${QT_DEFINITIONS})
add_definitions(-DQT_PLUGIN)
add_definitions(-DQT_NO_DEBUG)
add_definitions(-DQT_SHARED)

add_library(${PROJECT} SHARED
    User.h
    User.cpp)

#find_package(Qt5 REQUIRED Core)
#get_target_property(QtCore_location Qt5::Core LOCATION)

#include_directories(
#    ${Qt5Core_INCLUDE_DIRS}
#    ${QT_QTCORE_INCLUDE_DIR}
#    ${QT_INCLUDE_DIR}
#    ${CMAKE_CURRENT_SOURCE_DIR}
#    ${CMAKE_CURRENT_BINARY_DIR}
#)
#set(HEADERS
#    User.h
#    ../../common/request/RequestInterface.h
#    ../../common/session/session.h
#    ../../common/helper/helper.h
#    )
#
#
#add_executable(${PROJECT}2 ${HEADERS})
qt5_use_modules(${PROJECT} Core)
qt5_use_modules(${PROJECT} Sql)
#
#target_link_libraries(${PROJECT} Qt5::Sql)