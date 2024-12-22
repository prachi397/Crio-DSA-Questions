// Given an encoded string, return its decoded string.
// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is
// being repeated exactly k times. Note that k is guaranteed to be a positive integer.
// You may assume that the input string is always valid; there are no extra white spaces, square brackets
// are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits
// and that digits are only for those repeat numbers, k. For example, there will not be input like 3a
// or 2[4].
// The test cases are generated so that the length of the output will never exceed 105.

// Example 1:
// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"
// Example 2:
// Input: s = "3[a2[c]]"
// Output: "accaccacc"
// Example 3:
// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"

function decodeString(s) {
  let stringStack = [];
  let numStack = [];
  let currentStr = "";
  let currentNum = 0;

  //iterate over the string
  for (let i = 0; i < s.length; i++) {
    //check if character is a digit
    if (!isNaN(s[i])) {
      currentNum = currentNum * 10 + parseInt(s[i]); //make it current number
    }
    //if we found opening bracket
    else if (s[i] === "[") {
      numStack.push(currentNum); //push the current number into number stack
      stringStack.push(currentStr); //push the current string into string stack
      //reset the current string and current number
      currentStr = "";
      currentNum = 0;
    }
    //if we found closing bracket
    else if (s[i] === "]") {
      let repeatCount = numStack.pop();  //get the repeat count by poping the last ele from numstack
      let prevString = stringStack.pop(); //get the prev sty by poping the last ele from stringStack
      //get the current string
      currentStr = prevString + currentStr.repeat(repeatCount);
    }
    //if we found a character then add it to the current string
     else {
      currentStr += s[i];
    }
  }
  return currentStr;
}
console.log(decodeString("3[a]2[bc]"));

//tc and sc both are O(n)
