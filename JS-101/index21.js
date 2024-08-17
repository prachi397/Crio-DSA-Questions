// Problem Description
// A factorial is the product of all positive integers less than or equal to n. 
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// Implement the function findFactorial() that Accepts a number argument n
// Returns a number, that is the factorial of the given number n
// Note
// n will be greater than or equal to zero.
// The factorial of zero, denoted as 0! is equal to 1.

const findFactorial = (n) => {
    let factorial = 1;
    for (let i = factorial; i <= n; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
console.log(findFactorial(7))

//sample test case
if (findFactorial(4) !== 24)
    console.log("Test fails: Expected 24 for input n = 4");
else
    console.log("Sample test case for input n = 4 passed!");