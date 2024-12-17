// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t 
// (i.e., t is concatenated with itself one or more times).
// Given two strings str1 and str2, return the largest string x such that x divides both str1 
// and str2.
// Example 1:
// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:
// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:
// Input: str1 = "LEET", str2 = "CODE"
// Output: ""

//function to find gcd
function findGCD(a,b){
    if(b===0){
        return a;
    }
    return findGCD(b,a%b);
}
function gcdOfStrings(str1,str2){
    //corner case when no common divisor
    if(str1+str2 !== str2+str1){
        return "";
    }
    //find gcd of lengths of both the strings
    let gcdVal = findGCD(str1.length,str2.length);
    //return the elements till gcdVal from the first string
    return str1.slice(0,gcdVal); // here we can also use str1.substring function as well
}
console.log(gcdOfStrings("ABCABC","ABC"));