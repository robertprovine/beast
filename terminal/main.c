#include <curses.h>

int main()
{
    initscr();
    move(5, 20);
    addstr("Beast");
    // regular beast
    addch(ACS_LTEE);
    addch(ACS_RTEE);
    // regular beast
    addch(ACS_LTEE);
    addch(ACS_RTEE);
    addch(ACS_CKBOARD);
    addch(ACS_CKBOARD);
    getch();
    endwin();
}

// 195, 180
/*
superbeast: 199, 182
*/
