year = int(input("Enter a year: "))
is_leap = "Leap Year" if (year % 4 == 0 and (year % 100 != 0 or year % 400 == 0)) else "Not a Leap Year"
print(is_leap)