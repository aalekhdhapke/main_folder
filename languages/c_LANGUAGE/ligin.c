#include <stdio.h>

int main()
{
char UserName[] = "iluvcake";
scanf("%s", &UserName);
printf("Please enter your password: \n");
char PassWord[] = "Chocolate";
scanf("%s", &PassWord);
    if (UserName == "iluvcake") 
    {
     if (PassWord == "Chocolate"){
     printf("Welcome!\n");
    }
    }else
    {
     printf("The user name or password you entered is invalid.\n");
    }

}







