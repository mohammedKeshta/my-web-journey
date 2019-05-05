#include <cs50.h>
#include <stdio.h>
#include <string.h>

bool compare_string(char *str_1, char *str_2);

int main(void)
{
    string str_1  = get_string("str 1: ");
    string str_2  = get_string("str 2: ");

    if (compare_string(str_1, str_2))
    {
        printf("same\n");
    }
    else
    {
        printf("different\n");
    }

}

bool compare_string(char *str_1, char *str_2)
{

    if (strlen(str_1) != strlen(str_2))
    {
        return false;
    }

    for (int i = 0;  str_1[i] != '\0'; i++)
    {
        if (str_1[i] != str_2[i])
        {
            return false;
        }
    }
    return true;
}
