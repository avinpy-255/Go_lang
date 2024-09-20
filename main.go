package main

import (
    "errors"
    "fmt"
    "time"
)

func main() {
    // Print a simple message
    var message string = "Hello, Go!"
    fmt.Println(message)

    // Print a number
    number := 10
    fmt.Println(number)

    // Call various functions to demonstrate different concepts
    loop()
    loop2()
    switchExample() // Corrected function call
    defineFunction()
    divideExample()
    personExample()
    interfaceExample()
    concurrencyExample()
    errorHandlingExample()
}

// Demonstrates an if-else statement
func loop() {
    number := 1000
    if number > 1000000000000 {
        fmt.Printf("number is greater than %d\n", number)
    } else {
        fmt.Println("number is less than 100")
    }
}

// Demonstrates a for loop
func loop2() {
    for i := 0; i < 10; i++ {
        fmt.Println(i)
    }
}

// Demonstrates a switch statement
func switchExample() { // Renamed function to avoid conflict with keyword
    day := "Monday"
    switch day {
    case "Monday":
        fmt.Println("Today is Monday")
    case "Tuesday":
        fmt.Println("Today is Tuesday")
    default:
        fmt.Println("Today is not Monday or Tuesday")
    }
}

// Simple function that returns a greeting message
func greet(name string) string {
    return "Hello, " + name
}

// Demonstrates calling a function and printing its result
func defineFunction() {
    fmt.Println(greet("John")) // Corrected function call
    message := greet("Jane") // or this way
    fmt.Println(message)
}

// Function that divides two numbers and returns an error if the divisor is zero
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, fmt.Errorf("cannot divide by zero")
    }
    return a / b, nil
}

// Demonstrates error handling with the divide function
func divideExample() {
    result, err := divide(10, 5)
    if err != nil {
        fmt.Println(err)
    } else {
        fmt.Println(result)
    }
}

// Struct to represent a person
type Person struct {
    FirstName string
    LastName  string
    Age       int
}

// Method to get the full name of a person
func (p Person) FullName() string {
    return p.FirstName + " " + p.LastName
}

// Demonstrates creating and using a struct
func personExample() {
    p := Person{FirstName: "John", LastName: "Doe", Age: 30}
    fmt.Println("Full Name:", p.FullName())
}

// Interface to represent an animal that can speak
type Animal interface {
    Speak() string
}

// Structs to represent different types of animals
type Dog struct{}
type Cat struct{}

// Implement the Speak method for Dog
func (d Dog) Speak() string {
    return "Woof!"
}

// Implement the Speak method for Cat
func (c Cat) Speak() string {
    return "Meow!"
}

// Demonstrates using interfaces
func interfaceExample() {
    var a Animal

    a = Dog{}
    fmt.Println("Dog:", a.Speak())

    a = Cat{}
    fmt.Println("Cat:", a.Speak())
}

// Function to print numbers with a delay
func printNumbers() {
    for i := 1; i <= 5; i++ {
        time.Sleep(1 * time.Second)
        fmt.Println(i)
    }
}

// Function to print letters with a delay
func printLetters() {
    for i := 'A'; i <= 'E'; i++ {
        time.Sleep(1 * time.Second)
        fmt.Printf("%c\n", i)
    }
}

// Demonstrates concurrency with goroutines
func concurrencyExample() {
    go printNumbers()
    go printLetters()

    // Wait for goroutines to finish
    time.Sleep(6 * time.Second)
    fmt.Println("Done")
}

// Function that divides two numbers and returns an error if the divisor is zero
func divideWithError(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("cannot divide by zero")
    }
    return a / b, nil
}

// Demonstrates error handling with the divideWithError function
func errorHandlingExample() {
    result, err := divideWithError(10, 0)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println("Result:", result)
    }
}