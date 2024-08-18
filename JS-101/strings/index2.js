// Problem Description
// A palindrome is a sequence of characters that reads the same backward as forward. 
// Eg: "noon" or “racecar”.
// Create a new function checkPalindrome() that Accepts a string argument str
// Returns a boolean true, if the string is a palindrome
// false, otherwise

function checkPalindrome(str) {
    let reverseStr = str.split('').reverse().join('');
    if (reverseStr === str) {
        return true;
    } else {
        return false;
    }
}
console.log(checkPalindrome('noon'));

//sample test case
if (checkPalindrome("madam") !== true)
    console.log("Test fails: Expected true for input str = 'madam'");
else
    console.log("Sample test case for input str = 'madam' passed!");