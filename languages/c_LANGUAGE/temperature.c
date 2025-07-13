#include <stdio.h>

void celsius_to_fahrenheit(double celsius) {
    if (celsius > 0) {
        double fahrenheit = (celsius * 9 / 5) + 32;
        printf("Temperature in Fahrenheit: %.2f\n", fahrenheit);
    } else {
        printf("too cold\n");
    }
}
