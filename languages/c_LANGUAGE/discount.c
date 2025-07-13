#include <stdio.h>

int main() {
    char username[50];
    float amount, discountRate, discountAmount, finalAmount;

    printf("Enter your username: ");
    scanf("%s", username);

    printf("Enter total amount: ");
    scanf("%f", &amount);

    if (amount < 5000) {
        discountRate = 6.0;
    } else {
        discountRate = 30.0;
    }

    discountAmount = (amount * discountRate) / 100;
    finalAmount = amount - discountAmount;

    printf("\nHello, %s!\n", username);
    printf("You got a %.1f%% discount on %.2f.\n", discountRate, amount);
    printf("Discount Amount: %.2f\n", discountAmount);
    printf("Final Amount to Pay: %.2f\n", finalAmount);

    return 0;  
}
