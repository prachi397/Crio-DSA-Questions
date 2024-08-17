// Problem Description
// Implement the function kthCharFromStart() which Accepts 2 arguments - a string str and a number k
// Returns the kth character of the string str from the start
function kthCharFromStart(str, k) {
    return str[k - 1];
}
console.log(kthCharFromStart('Prachi', 4));

//sample test case
if (kthCharFromStart("abcdefghi", 2) !== 'b')
    console.log("Test fails: Expected 'b' for input str = 'abcdefghi' and k = 2");
else
    console.log("Sample test case for input str = 'abcdefghi' and k = 2 passed!");