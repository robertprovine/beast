#include <stdio.h>

int main()
{
    char str[500];
    printf("\033[31m");
    printf("\033[1;1H");
    printf("\u255F\u2562 ");
    printf("\033[J");
    printf("\u2592");
    printf("\u2588");
    printf("\u2593\n");
    printf("\033[30;42m");
    printf("\u2593");
    printf("\u2593");
    printf("\u2593");
    printf("\u2593");
    printf("\u2593");
    printf("\u25F0");
    printf("\u26C6");
    printf("\u25B6");
    printf("\u25B7");
    printf("\033[?25h");
    scanf("%s", str);
}

