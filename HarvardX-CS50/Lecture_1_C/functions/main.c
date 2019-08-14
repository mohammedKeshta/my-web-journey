#include <cs50.h>
#include <stdio.h>

// it's a prototype that cough is exist in the file
void cough(int limit);
int get_positive_number(void);

int main(void)
{

    cough(3);
    int number = get_positive_number();
    printf("The number is %d\n", number);
}

void cough(int limit)
{
    for (int i=0;i<limit;i++)
    {
       printf("cough\n");
    }
}

int get_positive_number(void)
{
    int n = 0;
    do
    {
        n = get_int("Number: ");
    } while(n < 1);
    return n;
}
