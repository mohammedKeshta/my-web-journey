#include <cs50.h>
#include <stdio.h>

int main(void)
{

    int numberOne = get_int("Please enter First Number : \n");
    int numberTwo = get_int("Please enter Second Number : \n");

    printf("The sum of %i + %i = %i\n", numberOne, numberTwo, numberOne + numberTwo);
    printf("The subtriction of %i - %i = %i\n", numberOne, numberTwo, numberOne - numberTwo);
    printf("The multiply of %i * %i = %i\n", numberOne, numberTwo, numberOne * numberTwo);
    printf("The division of %i / %i = %i\n", numberOne, numberTwo, numberOne / numberTwo);
    printf("The reminder of %i // %i = %i\n", numberOne, numberTwo, numberOne % numberTwo);
}
