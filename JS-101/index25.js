// Problem Description
// An odd number is a number that is not a multiple of 2.
// Implement the function oddNumbers() that
// Accepts a number argument n
// Returns an array of all the odd numbers from 1 to n, inclusive.
// Note
// The value of n will be greater than 0.

function oddNumbers(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            result.push(i);
        }
    }
    return result;
}
console.log(oddNumbers(10));

//sample test case
if (oddNumbers(5).toString() !== [1, 3, 5].toString())
    console.log("Test fails: Expected [1, 3, 5] for input n = 5");
else
    console.log("Sample test case for input n = 5 passed!");