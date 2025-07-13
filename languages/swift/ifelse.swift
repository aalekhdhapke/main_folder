
print("Enter the first number: ", terminator: "")
if let input1 = readLine(), let num1 = Double(input1) {
    print("Enter the second number: ", terminator: "")
    if let input2 = readLine(), let num2 = Double(input2) {
        if num1 > num2 {
            print("The larger number is: \(num1)")
        } else {
            print("The larger number is: \(num2)")
        }
    } else {
        print("Invalid input for the second number.")
    }
}

