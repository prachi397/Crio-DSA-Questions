// Problem Description
// Implement the function checkForSubstr() that:
// Accepts two arguments a string str and a substring of the string searchstr
// Finds the index of the first occurrence of substring searchstr in the actual string str.
// Finds the index of the last occurrence of that substring searchstr in the actual string str.
// Returns a boolean true, if both these indexes are the same
// false, otherwise

function checkForSubstr(str, searchstr) {
    let firstIndex = str.indexOf(searchstr);
    let lastIndex = str.lastIndexOf(searchstr);
    if (firstIndex === lastIndex) {
        return true;
    }
    else {
        return false;
    }
}
console.log(checkForSubstr('Now is the time', 'time'))

//sample test case
if (checkForSubstr("abcdefghi", "def") !== true)
    console.log("Test fails: Expected true for input str = 'abcdefghi' and k = 'def'");

else
    console.log("Sample test case for input str = 'abcdefghi' and k = 'def' passed!");