// Problem Description
// Given a string, find the length of the longest substring which has no repeating characters.

// Input format --->
// Input is a string.
// Output format --->
// Output is an integer representing the longest substring with no repeating characters.

// Sample Input --->
// aabcccbcb
// Sample Output --->
// 3
// Explanation --->
// "abc" is the longest substring with no repeating characters.

// Sample Input --->
// cdddddd
// Sample Output --->
// 2
// Explanation --->
// "cd" is the longest substring with no repeating characters.

//dynamic sliding window concept here
function longestSubstringWithoutRepeatingCharacter(s) {
    //create map using key as character and value as Integer
    let mp = new Map();
    let left = 0;
    let maxLength = 0;
    //loop through the string
    for(let right=0;right<s.length;right++){
        //if the character is already in map and its last index is >= left
        if(mp.has(s[right]) && mp.get(s[right])>=left){
            //increament left to the right of last index
            left = mp.get(s[right])+1;
        }
        //update the character in the map
        mp.set(s[right],right);
        //update the maximum length of the substring
        maxLength = Math.max(maxLength, right-left+1);
    }
    return maxLength;
}
console.log(longestSubstringWithoutRepeatingCharacter('aabcccbcb'));