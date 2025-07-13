#include <stdio.h>

int main() {
    float num1, num2;

    printf("Enter the first number: ");
    scanf("%f", &num1);

    printf("Enter the second number: ");
    scanf("%f", &num2);

    if (num1 > num2) {
        printf("The larger number is: %.2f\n", num1);
    } else {
        printf("The larger number is: %.2f\n", num2);
    }

    return 0;
}





