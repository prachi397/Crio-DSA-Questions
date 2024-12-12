// Problem Description
// Given a string, find the length of the longest substring that contains at most K distinct characters.
// Note:
// Uppercase and Lowercase characters should be considered as different characters.
// There can be numbers and special characters as well.

// Input format --->
// There are 2 lines of input.
// First-line contains two space-separated integers representing the value of N and K.
// The next line contains the string S of length N.

// Output format --->
// The length of the longest substring T that contains at most K distinct characters.

// Sample Input --->
// 5 3
// abacd

// Sample Output --->
// 4

// Explanation --->
// The longest substring that has 3 distinct characters, "abac", is of length 4.

// Sample Input --->
// 6 3
// Xyyzya

// Sample Output --->
// 5

// Explanation
// There are 2 substrings, "Xyyzy" and “yyzya” which are the longest ones having 3 distinct characters and 
// their length is 5.

//brute force approach, TC- O(n*n), SC-O(1)
function lengthOfLongestSubstringKDistinct(s, k){
    let maxLength = 0;
    //find all the possible substrings
    for(let i=0;i<s.length;i++){
        let subStr = '';
        let distinctChars = new Set();
        for(let j=i;j<s.length;j++){
            subStr += s[j];
            distinctChars.add(s[j]);
            if(distinctChars.size>k){
                break;
            }
            maxLength = Math.max(maxLength,subStr.length);
        }
    }
    return maxLength;
}
console.log(lengthOfLongestSubstringKDistinct('abacd',3));