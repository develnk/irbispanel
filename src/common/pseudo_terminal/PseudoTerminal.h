#ifndef IRBISPANEL_PSEUDOTERMINAL_H
#define IRBISPANEL_PSEUDOTERMINAL_H

#include <stdbool.h>
#include <signal.h>
#include <sys/types.h>
#include <QString>

class PseudoTerminal
{
private:       // class members
    static char* _pty_chars;          // "/dev/ptyXY"
    static char* _hexdigits;          // [0-9a-f]

private:       // instance members
    char*        _pty_name;           // name of the opened master pty
    char*        _tty_name;           // name of the slave tty
    char         _pty_x;              // the X portion of the pty name
    char         _pty_y;              // the Y portion of the pty name
    int          _master_fd;          // handle to the master file
    // descriptor (-1 if not open)
    int          _slave_fd;           // handle to the slave file
    // descriptor (can be -1)
    int        _slave_pid;          // process id of the running slave
    char*        _buf;                // internal buffer used for
    // read() / write()
    int       _buf_size;           // how big is the buffer
    // (default set by constructor)
    int      _buf_count;          // how many bytes are in the
    // buffer (from read)
protected:
    // copy constructor (prevents copying object - could
    // kill slave by accident)
    PseudoTerminal(PseudoTerminal&)   { /* empty */         }
    PseudoTerminal& operator=(PseudoTerminal&);
    // accessors
    char* _getPtyChars()              { return(_pty_chars); }
    char* _getHexdigits()             { return(_hexdigits); }
    char* _getBuffer()                { return(_buf);       }
    int& _getBufferCount()            { return(_buf_count); }

    // pty name setting helpers
    void _setPtyX(char c);
    void _setPtyY(char c);

public:
    PseudoTerminal(int buf_size = 512);  // opens the master pty
    ~PseudoTerminal();

    // accessors
    const char* getPtyName() const    { return(_pty_name);  }
    const char* getTtyName() const    { return(_tty_name);  }
    char getPtyX() const              { return(_pty_x);     }
    char getPtyY() const              { return(_pty_y);     }
    int getFd() const                 { return(_master_fd); }
    operator int() const              { return(_master_fd); }
    int getSlaveFd() const            { return(_slave_fd);  }
    pid_t getSlavePid() const         { return(_slave_pid); }
    const char* getBuffer() const     { return(_buf);       }
    int getBufferSize() const         { return(_buf_size);  }
    int getBufferCount() const        { return(_buf_count); }

    // line disipline
    static bool getMode(int fd, struct termio* mode);
    static bool setMode(int fd, struct termio* mode);
    static bool setRawMode(int fd, struct termio* orig = NULL);
    static bool copyMode(int src_fd, int dest_fd, struct termio* orig = NULL);

    // slave pty and child process management
    int slave();
    int forkvp(char* argv[], bool control_terminal = false, struct termio* mode = NULL);
    bool isAlive();
    int terminate(int signo = SIGTERM);
    void closeMaster(bool close_slave = true);
    void closeSlave();

    // master io - can throw(int errno)
    int read(bool throw_exception = true);
    int write(const QString buf, int buf_size, bool throw_exception = true);

    PseudoTerminal& operator<<(PseudoTerminal& pty);
    PseudoTerminal& operator>>(PseudoTerminal& pty);
    friend PseudoTerminal& operator<<(PseudoTerminal& pty, const QString& str);
    friend PseudoTerminal& operator>>(PseudoTerminal& pty, QString& str);
    friend PseudoTerminal& operator<<(PseudoTerminal& pty, const char* str);
};


inline PseudoTerminal& operator<<(PseudoTerminal& pty, const QString& str)
{
    pty.write(str, str.length());
    return(pty);
}

inline PseudoTerminal& operator>>(PseudoTerminal& pty, QString& str)
{
    int nread = pty.read();
    if (nread > 0)
        str = pty.getBuffer();
    return(pty);
}

inline PseudoTerminal& operator<<(PseudoTerminal& pty, const char* str)
{
    pty.write(str, strlen(str));
    return(pty);
}

#endif //IRBISPANEL_PSEUDOTERMINAL_H
