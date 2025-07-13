
print("Enter a number: ", terminator: "")
if let input = readLine(), let num = Int(input) {
    var result: String

    if num > 0 {
        result = "Positive"
    } else if num < 0 {
        result = "Negative"
    } else {
        result = "Zero"
    }

    print("The number is \(result).")
}
