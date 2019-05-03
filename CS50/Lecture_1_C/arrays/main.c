#include <cs50.h>
#include <stdio.h>

void chart(int count, int scores[]);

int main(void)
{
    const int LIMIT = get_int("Please Number of Scores : ");

    // Get Scores from users
    int scores[LIMIT];
    for (int i =0; i < LIMIT; i++)
    {
        scores[i] = get_int("Score %i: ", i+1);
    }

    // Chart scores
    chart(LIMIT, scores);
}


// Generate bar
void chart(int count, int scores[])
{
    // Output on hash per point
    for (int i = 0; i < count; ++i)
    {
        printf("Score %i: ", i+1);
        for (int j = 0; j < scores[i]; j++)
        {

            printf("#");
        }
        printf("\n");
    }

}
