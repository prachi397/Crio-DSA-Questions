// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting 
// some (can be none) of the characters without disturbing the relative positions of the remaining 
// characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
// Example 1:
// Input: s = "abc", t = "ahbgdc"
// Output: true

// Example 2:
// Input: s = "axc", t = "ahbgdc"
// Output: false

function isSubsequence(s,t){
    let i=0,j=0;

    //iterate over both the strings
    while(i<s.length && j<t.length){
        //if the element of s and t matches 
        if(s[i] === t[j]){
            //then moves to the next element of both the strings
            i++;
            j++;
        }
        //if not match then go to next element of t string
        else{
            j++;
        }
    }
    //lastly if we completely traversed the first string
    if(i === s.length){
        //return true
        return true;
    }
    return false;
}
console.log(isSubsequence("abc","ahbgdc"));