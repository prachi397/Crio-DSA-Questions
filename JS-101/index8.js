// Problem Description
// Implement the function compareNumbers() that Accepts three numbers arguments a, b and c
// Returns a boolean true, if the first number a is equal to the second number b
// true, if the second number b is equal to the third number c
// false, otherwise

function compareNumbers(a, b, c) {
    if (a === b || b === c) {
        return true;
    } else {
        return false;
    }
}
console.log(compareNumbers(10, 99, 99));
if (compareNumbers(1, 1, 2) !== true)
    console.log("Test fails: Expected true for input a = 1, b = 1 and c = 2");
else
    console.log("Sample test case for input a = 1, b = 1 and c = 2 passed!");