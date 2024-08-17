// Problem Description
// Implement the function findSumOfFirstN() that Accepts a number argument n
// Returns a number, which is the sum of all the numbers from 1 to n
// Note
// The number n will always be greater than zero.

const findSumOfFirstN = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(findSumOfFirstN(5));

//sample test case
if (findSumOfFirstN(3) !== 6)
    console.log("Test fails: Expected 6 for input n = 3");
else
    console.log("Sample test case for input n = 3 passed!");