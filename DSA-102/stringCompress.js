// Given an array of characters chars, compress it using the following algorithm:
// Begin with an empty string s. For each group of consecutive repeating characters in chars:
// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, but instead, be stored in the input
// character array chars. Note that group lengths that are 10 or longer will be split into multiple
// characters in chars.
// After you are done modifying the input array, return the new length of the array.
// You must write an algorithm that uses only constant extra space.

// Example 1:
// Input: chars = ["a","a","b","b","c","c","c"]
// Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
// Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".

// Example 2:
// Input: chars = ["a"]
// Output: Return 1, and the first character of the input array should be: ["a"]
// Explanation: The only group is "a", which remains uncompressed since it's a single character.

// Example 3:
// Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
// Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
// Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".

function compress(chars) {
  let compressArr = [];
  //corner case when only one element then return the same array
  if (chars.length === 1) {
    return chars;
  }
  //set the count initially as 1
  let count = 1;
  //loop through the array
  for (let i = 1; i <= chars.length; i++) {
    //if it is not first element and the previous element is same as the current that means
    //repetition
    if (i > 0 && chars[i] === chars[i - 1]) {
      //increase count
      count++;
    }
    //otherwise: we encountered the element first time
    else {
      // else, if the current element is not equal to the previous one, push the
      //previous into array
      compressArr.push(chars[i - 1]);
      //convert the count into string and push it
      compressArr.push(count.toString());
      //lastly make the count as 1
      count = 1;
    }
  }
  //return compressed array
  return compressArr;
}
console.log(compress(["d", "a", "a", "b", "b", "c", "c", "c"]));
//here tc and sc both are O(n)

//optimal approach using no extra space according to the problem statement
function compressOptimal(chars) {
  let idx1 = 0;
  let idx2 = 0;

  //loop through the array by idx2 pointer
  while (idx2 < chars.length) {
    //get the current value of the character
    let currentChar = chars[idx2];
    //set count to 0
    let count = 0;
    //loop until idx2 is less than lenght and the element at idx2 is qual to the current character
    while (idx2 < chars.length && chars[idx2] === currentChar) {
        //increatement indx2 and count value
      idx2++;
      count++;
    }
    //se the current character to the array at idx1 index
    chars[idx1] = currentChar;
    //increment idx1
    idx1++;
    //we do not have to push count if count is 1, so checking if count greater than 1
    if (count > 1) {
        //convert the count value into string
        const countString = count.toString();
        //iterate through the value because it is given if the group lengths that are 10 or longer 
        // will be split into multiple characters in chars.
        for (let i = 0; i < countString.length; i++) {
            //additing the first digit of count into array and incremenet idx1
            chars[idx1] = countString[i];
            idx1++;
        }
    }
  }

  return chars;
}
console.log(compressOptimal(["d", "a", "a", "b", "b", "c", "c", "c","c","c"]));
