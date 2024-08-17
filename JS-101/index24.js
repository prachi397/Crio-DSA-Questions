// Problem Description
// The function takes in str, a string, and k, a number. The function should return a new string 
// that repeats str for k times.
// If k is not greater than 0, return an empty string.
// Input Parameter Description
// str (string): The string to be repeated.
// k (number): The number of times to repeat the string.
// Output Requirements
// A new string that repeats str for k times. If k is not greater than 0, return an empty string.

function repeatString(str, k) {
    if (k <= 0) {
        return '';
    }
    let newStr = '';
    while (k > 0) {
        newStr += str;
        k--;
    }
    return newStr;
}
console.log(repeatString('ab', 3));

//sample test case
if (repeatString("!", 3) !== "!!!")
    console.log("Test fails: Expected '!!!' for input str = '!' and k = 3");
else
    console.log("Sample test case for input str = '!' and k = 3 passed!");