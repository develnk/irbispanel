//
// Created by kluch on 15.08.16.
//

#include <iostream.h>
#include <errno.h>
#include <sys/time.h>
#include <sys/types.h>
#include <unistd.h>

#include "PseudoTerminal.h"

int main(int argc, char* argv[])
{
    char* args[4];

    ////
    // start xterm (doesn't have to be started by the pty but
    // it is convenient)
    PseudoTerminal xterm_pty;

    // build the command line for xterm
    args[0] = "xterm";
    char Sxxd[6];      // setup the -Sxxd argument for xterm
    Sxxd[0] = '\0';
    strcpy(Sxxd, "-S");
    Sxxd[2] = xterm_pty.getPtyX();
    Sxxd[3] = xterm_pty.getPtyY();
    Sxxd[4] = '1';     // number of the inherited File descriptor
    Sxxd[5] = 0;       // last argument -- NULL
    args[1] = Sxxd;
    args[2] = NULL;

    // start the xterm and wait on it to tell us what its window id is
    xterm_pty.forkvp(args);
    xterm_pty.read();
    cerr << "xterm is up wid=" << xterm_pty.getBuffer();


    ////
    // start telnet
    PseudoTerminal telnet_pty;
    args[0] = "telnet";
    args[1] = "localhost";
    args[2] = NULL;
    telnet_pty.forkvp(args);


    try
    {
        // setup the file descriptors for select (using the operator
        // int() to return the master fd)
        fd_set fds;
        int max_fd = (telnet_pty > xterm_pty) ? telnet_pty : xterm_pty;
        max_fd++;
        String str;

        // mediator loop (mediates between the xterm and telnet)
        for (;;)
        {
            // build the select fd's so we can mediate between
            // the xterm and telnet
            FD_ZERO(&fds);
            FD_SET(xterm_pty, &fds);
            FD_SET(telnet_pty, &fds);

            // call select and wait on some data from either the
            // xterm or telnet
            int rc = select(max_fd, &fds, NULL, NULL, NULL);

            if (FD_ISSET(xterm_pty, &fds))
            {
                // read the users input into a string
                xterm_pty >> str;
                // check for accelerator keys (^Q to quit the app for now)
                if (str == "^Q")
                {
                    cerr << "quiting" << endl;
                    break;
                }
                else
                    telnet_pty << str;  // forward the input on to telnet
            }
            else
            if (FD_ISSET(telnet_pty, &fds))
            {
                // forward the telnet output on to the xterm
                telnet_pty >> xterm_pty;
            }
        }
    }
    catch (int& pty_errno)
    {
        // an exception will be thrown if telnet or the xterm is closed
        cerr << "caught an exception " << strerror(pty_errno) << endl;
    }
    return(0);
}
