#include <stdio.h>

int main() {
    int num1 = 5000;
    int num2 = 500;  
    int sum = num1 -= num2; 

    printf("Sum of %d and %d is %d\n", num1, num2, sum);

    return 0;
}
