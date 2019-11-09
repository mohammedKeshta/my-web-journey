#include <cs50.h>
#include <stdio.h>

int main(void)
{
    // Prompt user for Answer:
    char c = get_char("Answer: ");

    // Check Answer
    if (c == 'M' || c == 'm')
    {

        printf("yes\n");
    }
    else if (c == 'Y' || c == 'y')
    {

        printf("no\n");
    }
}
