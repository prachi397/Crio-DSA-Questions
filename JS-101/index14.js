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

// Problem Description
// Implement the function kthCharFromEnd() which Accepts 2 arguments - a string str and a number k
// Returns the kth character of the string str from the end
function kthCharFromEnd(str, k) {
    let len = str.length;
    return str[len - k];
}
console.log(kthCharFromEnd('prachi', 3));

//sample test case

if (kthCharFromEnd("abcdefghi", 2) !== 'h')
    console.log("Test fails: Expected 'h' for input str = 'abcdefghi' and k = 2");
else
    console.log("Sample test case for input str = 'abcdefghi' and k = 2 passed!");
