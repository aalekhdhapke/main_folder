#include <stdio.h>

int main(){
    int balance = 1000;
    int withdrawl;
    printf("Enter the amount : ");
    scanf("%d", &withdrawl);
    if (balance >= withdrawl){
        balance -= withdrawl;
        printf("Withdrawl successful. Your  balance is: %d\n", balance);
        } else {
            printf("Insufficient balance. Please try again.\n");
            }
            return 0;

}






