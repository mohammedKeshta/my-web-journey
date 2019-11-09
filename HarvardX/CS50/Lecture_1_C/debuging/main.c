#include <stdio.h>

int main(void)
{
    printf("Hello World!\n");

    /*
     * condition part i <= 10 it will print 11 times becuase i start from 0 index.
     */
    for (int i = 0; i <= 10; i++)
    {
        printf("i is %i \n", i);
        printf("#\n");
    }
}
