#include <cs50.h>
#include <stdio.h>
#include <string.h>
#include <ctype.h>

// Prototype functions
void play_with_strings(void);
void ciphering_encryption(void);

int main(void)
{

    play_with_strings();
    // ciphering_encryption();

}

// Ciphering Encryption
void ciphering_encryption()
{
    string message;
    char ch;
    int key;

    message = get_string("Enter a message to encrypt: ");
    key = get_int("Enter key : ");

    for (int i = 0; message[i] != '\0'; ++i)
    {
        ch = message[i];
        if (ch >= 'a' && ch <= 'z')
        {
            ch += key;
            if (ch > 'z')
            {
                ch -= 'z' - 'a' - 1;
            }
            message[i] = ch;
        }
        else if (ch >= 'A' && ch <= 'Z')
        {
            ch += key;
            if (ch > 'Z')
            {
                ch -= 'Z' + 'A' - 1;
            }
            message[i] = ch;
        }
    }

    printf("Encrypted message: %s\n", message);
}

// Play with strings
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
