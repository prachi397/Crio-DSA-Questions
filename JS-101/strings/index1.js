// Problem Description
// Implement a new function reverseString() that Accepts a string argument str
// Returns reverse of the input string str (i.e, characters of the string in reverse order)

//reverse string using loop --->
// this is not the optimal approach as it takes space as well as time
function reverseStringBruteForce(str) {
    let reverseStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }
    return reverseStr;
}

console.log(reverseStringBruteForce('Prachi'));

//reverseString using built in methods
function reverseString(str) {
    //convert the string into array of characters
    let splitArr = str.split('');
    // reverse the array of characters
    let reverseArr = splitArr.reverse();
    //join the reversed characters of array 
    let reverseStr = reverseArr.join('');
    return reverseStr;
}

console.log(reverseString('Hello World'));

//sample test case
if (reverseString("abcdefghi") !== "ihgfedcba")
    console.log("Test fails: Expected 'ihgfedcba' for input str = 'abcdefghi'");
else
    console.log("Sample test case for input str = 'abcdefghi' passed!");