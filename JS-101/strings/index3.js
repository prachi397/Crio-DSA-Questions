// Problem Description
// Implement the function findLongestWordLength() that
// Accepts a string argument str, corresponding to a sentence.
// It will be a series of words separated by whitespace.
// Returns a number that will be the length of the longest word in the input string str

// Sample Input --> "The quick brown fox jumped over the lazy dog"
// Sample Output --> 6

function findLongestWordLength(str) {
    let substr = str.split(' ');
    let longest = 0;
    for (let i = 0; i < substr.length; i++) {
        if (substr[i].length > longest) {
            longest = substr[i].length;
        }
    }
    return longest;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

//sample test case
if (findLongestWordLength("I live in India") !== 5)
    console.log("Test fails: Expected 5 for input str = 'I live in India'");
else
    console.log("Sample test case for input str = 'I live in India' passed!");