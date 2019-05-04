#include <cs50.h>
#include <stdio.h>
#include <string.h>
#include <ctype.h>

// Prototype functions
void play_with_strings(void);

int main(int argc, string argv[])
{

    // play_with_strings();

}

void play_with_strings()
{

    // Prompt user for an Input
    string str = get_string("Input: ");
    int n = 0;
    // \0 indicated to the latest place in the memory of storing the variable name.
    /*                      ___   ___   ___   ___   ___   ___   ___   ___   ____
     * str -> Mohammed -> | M | | o | | h | | a | | m | | m | | e | | d | | \0 |
     *                      ___   ___   ___   ___   ___   ___   ___   ___   ____
     */

    while(str[n] != '\0')
    {
        n++;
    }
    printf("The length of %s is %i \n", str, n);

    printf("Output: \n");
    // Print Character of an Input
    for (int i = 0, n = strlen(str); i < n; i++)
    {
        // you can get ASCII by casting the character to integer so
        // 1. Implicit casting -> int c = str[i]
        // 2. Explicit casting -> int c = (int) str[i]
        printf("Character %i is %c with ASCII number %i\n", i+1, str[i], str[i]);
    }
}
