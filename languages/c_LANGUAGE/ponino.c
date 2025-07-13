#include <stdio.h>

int main() {
    float num;

    // Input a number
    printf("Enter a number: ");
    scanf("%f", &num);

    // If-else ladder to check positive, negative, or zero
    if (num > 0) {
        printf("Positive number\n");
    } else {
        if (num < 0) {
            printf("Negative number\n");
        } else {
            printf("Zero\n");
        }
    }

    return 0;
}
