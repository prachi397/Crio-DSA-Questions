// Problem Description
// The Fibonacci sequence is a series of numbers where 0 and 1 are the 0th and 1st Fibonacci 
// numbers respectively.
// Every subsequent number after the first two numbers is the sum of the previous two 
// numbers in the series.

// Implement the function findFibonacci() that Accepts a number argument n
// Returns the nth Fibonacci number

// 0 1 1 2 3 5 8 13 21 34 ....

function findFibonacci(n) {
    if (n <= 1) {
        return n;
    }
    let first = 0;
    let second = 1;
    for (let i = 2; i <= n; i++) {
        let temp = second;
        second = first + second;
        first = temp;
    }
    return second;
}
console.log(findFibonacci(8));

//sample test case
if (findFibonacci(5) !== 5)
    console.log("Test fails: Expected 5 for input n = 5");
else
    console.log("Sample test case for input n = 5 passed!");