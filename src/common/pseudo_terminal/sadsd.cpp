#include
#include
#include
#include
#include
#include
#include // for openpty and forkpty

#define _GNU_SOURCE
#include

static int mFd;//File Descriptor which communicates with telnet

char *GoodBadConnectionPhrase[] =
    {"The parameter is incorrect", "Logon failure:", "Connection timed out", "c:\\", "C:\\",
     NULL}; //Should be null terminated
char *LoginPhrase[] = {"login name:", "password:", "Domain:", "login:"NULL}; //Should be null terminated
char *SessionClosePhrase[] = {"Close Telnet Session", NULL}; //Should be null terminated


int ReadFromFD(int fd)
{
    int bread;
    char buf[1024];
    if ((bread = read(fd, buf, 1023)) < 0) {
        perror("ReadFromFD");
        exit(EXIT_FAILURE);
    }
    buf[bread] = '\0';
    write(1, buf, strlen(buf));
    if (!strcmp("Close Telnet Session", buf))
        return -1;

    return bread;

}

int CheckForWords(int fd, char *words[])
{
    int bread, i;
    char buf[1024];
    char *isFound = NULL;

    while (!isFound) {
//if (ioctl(fd, FIONREAD, &i) == -1 || i == 0)
// return -1;
        if ((bread = read(fd, buf, 1023)) < 0) {
            perror("ReadFromFD");
            exit(EXIT_FAILURE);
        }
        buf[bread] = '\0';
        write(1, buf, strlen(buf));
//fprintf(stdout,"Buffere:%s\n",buf);

        i = 0;
        while (words[i]) {
//fprintf(stdout,"Current Phrase:%s\n",words[i]);
            if (isFound = strcasestr(buf, words[i++]))
                return i - 1;
        }
    }

    fprintf(stdout, "\nPhrase not found");

    return -1;

}

int ExecuteCommand(int mFd, char *cmd, char *expectedWords[])
{
    char c = '\r';
    write(mFd, cmd, strlen(cmd));
    write(mFd, &c, 1);
    return CheckForWords(mFd, expectedWords);
}

int CreateTelnetSession(char *ip, char *port, char *user, char *passwd, char *domain)
{
    int bread, index;
    char slaveName[255], c;

    fprintf(stdout, "Started\n");
    int pid = forkpty(&mFd, slaveName, NULL, NULL);

    if (pid < 0) {
        perror("CreateTelnetSession:forkpty");
        return 0;//Fail
    }
    else if (!pid)//Child
    {
        fprintf(stdout, "\nCreateTelnetSession:Child");
        char *conString = (char *) malloc(strlen(ip) + strlen(port) + strlen("/usr/bin/telnet "));
        sprintf(conString, "%s %s %s", "/usr/bin/telnet ", ip, port);
        system(conString);
        fprintf(stdout, "Close Telnet Session");

    }
    else //Parent
    {
        char c = '\r';//Input delimeter for telnet
        char buf[255];
//Authentication
        if (CheckForWords(mFd, LoginPhrase) >= 0) {
            int len = strlen(user);
            memcpy(buf, user, len);
            buf[len] = c;
            write(mFd, buf, len + 1);
            sleep(1);
            if (CheckForWords(mFd, LoginPhrase) >= 0) {
                len = strlen(passwd);
                memcpy(buf, passwd, len);
                buf[len] = c;
                write(mFd, buf, len + 1);
                sleep(1);
                if (CheckForWords(mFd, LoginPhrase) >= 0) {
                    len = strlen(domain);
                    memcpy(buf, domain, len);
                    buf[len] = c;
                    write(mFd, buf, len + 1);
                }
                if ((index = CheckForWords(mFd, GoodBadConnectionPhrase)) >= 0) {
                    if (index < 3)
                        return -1;
                    fprintf(stdout, "\nConnection established");
                    return 1;
                }

            }
        }

        fprintf(stdout, "\nConnection not established");

        return -1;
    }

}

int main()
{
    int bread;
    char slaveName[255], c;
#ifdef A
    if(CreateTelnetSession("192.168.169.1","23","administrator","Sommar.2004","")>=0)
{
char *expectedWords[] = {"active","passive"};
fprintf(stdout,"Result:%d\n",ExecuteCommand(mFd,"prcstate",expectedWords));
char *expectedWord[] = {"successfully.","completed"};
fprintf(stdout,"Result:%d\n",ExecuteCommand(mFd,"net view",expectedWord));
}
#else
    int pid = forkpty(&mFd, slaveName, NULL, NULL);
    char buf[1024];
    fd_set descriptor_set;

    if (pid < 0) {
        perror("forkpty");
        return 1;
    }
    else if (pid) {
        while (1) {
            FD_ZERO(&descriptor_set);
            FD_SET(mFd, &descriptor_set);
            FD_SET(0, &descriptor_set);

            struct timeval tv;
            tv.tv_sec = 0;
            tv.tv_usec = 700;


            if (select(FD_SETSIZE, &descriptor_set, NULL, NULL, &tv) < 0) {
                perror("select()");
                exit(EXIT_FAILURE);
            }
            if (FD_ISSET(mFd, &descriptor_set)) {
                fprintf(stdout, "\ntv:%d", tv.tv_usec);
                if (CheckForWords(mFd, GoodBadConnectionPhrase)) {
//wait(0);
                    exit(0);
                }
            }
            if (FD_ISSET(0, &descriptor_set)) {
                int len;
                char l;
                read(0, &l, 1);
                if (l == '\n') {
                    l = '\r';
                    write(mFd, &l, 1);
//l = '\n';
//write(mFd,&l,1);
                }
                else
                    write(mFd, &l, 1);
            }
        }
    }
    else {

        system("/usr/bin/telnet 192.168.169.1 23 -l administrator");
        fprintf(stdout, "Close Telnet Session");

    }

#endif
    return 0;
} 