#include <stdio.h>

int main() {
    int num1 = 2000;  
    float percentage = 1.4;  
    float result = (num1 * percentage) / 100;  

    printf("%.1f%% of %d is %.2f\n", percentage, num1, result);

    return 0;
}
