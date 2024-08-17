// Problem Description
// Implement the function getSubstr() which Accepts 3 arguments - a string argument str, 
// and two number arguments startInd, a starting index, and endInd, the ending index.
// Trims the string and returns the substring of that string starting from the start
// index, and ending 1 before the end index

function getSubstr(str, startInd, endInd) {
    return str.substring(startInd, endInd);
}
console.log(getSubstr('Hello world!', 1, 4));
//sample test case
if (getSubstr('abcdefghi', 2, 5) !== 'cde')
    console.log("Test fails: Expected 'cde' for input str = 'abcdefghi', startInd = 2 and endInd = 5");
else
    console.log("Sample test case for input str = 'abcdefghi', startInd = 2 and endInd = 5 passed!");