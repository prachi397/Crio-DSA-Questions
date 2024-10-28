// Problem Description
// You are given a string S and you have to implement a function to perform basic string compression,
// using the counts of repeated characters.
// If the "compressed" string would not become smaller than the original string, your function should return
// the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

// Input format
// A single line that contains the string S.

// Output format
// A single line that represents the compressed string as specified in the problem.

// Sample Input --->
// aabccccc
// Sample Output --->
// a2b1c5
// Explanation --->
// First 'a' repeats two times, then 'b' repeats once, then 'c' repeats two times.

function stringCompression(str) {
  let count = 0,
    word = "";
  for (let i = 0; i <= str.length; i++) {
    if (i > 0 && str[i] !== str[i - 1]) {
      word += str[i - 1] + count;
      count = 1;
    } else {
      count++;
    }
  }
  if (word.length >= str.length) {
    return str;
  } else {
    return word;
  }
}
console.log(stringCompression("aabccccc"));
