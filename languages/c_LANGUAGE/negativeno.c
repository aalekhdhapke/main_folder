#include <stdio.h>
// convert a positive number to its negative equivalent using not and give nigative binary number of it
int main()
{
    int n;
    printf("Enter a positive number: ");
    scanf("%d", &n);
    printf("The binary representation of %d is %d\n", n, ~n +1);
    return 0;
    }
