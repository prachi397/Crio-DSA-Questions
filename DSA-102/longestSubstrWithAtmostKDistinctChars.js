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

//optimal approach
function lengthOfLongestSubstringKDistinctOptimal(s, k){
   //create a map of key as character and value as integer
   let mp = new Map();
   let left=0,maxLength=0;
   //loop through the array
   for(let right=0;right<s.length;right++){
    //include the current character to the window
    mp.set(s[right],(mp.get(s[right])||0)+1);
    //loop untill map size is greater than k
    while(mp.size>k){
        //exclude the left character from the window
        mp.set(s[left],mp.get(s[left]-1));
        //if frequency of left character is 0 then delete that character from map
        if(mp.get(s[left])===0){
            mp.delete(s[left]);
        }
        //increament left
        left++;
    }
    //finally get the maximum length;
    maxLength = Math.max(maxLength,right-left+1);
   }
   return maxLength;
}
console.log(lengthOfLongestSubstringKDistinctOptimal('Xyyzya',3));