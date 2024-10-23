// Problem Description
// Given a string comprising only lowercase alphabets, determine whether it qualifies as a palindrome.
// A string is considered a palindrome if it reads the same forwards and backwards.
// Note:
// For the purpose of this problem, we define empty string as valid palindrome.
// Sample Input 1
// madam
// Sample Output 1
// true

function checkPalindrom(str){
    //first approach
    let reverseStr = ''
    for(let i=str.length-1;i>=0;i--){
        reverseStr += str[i];
    }
    return (reverseStr === str);
}
console.log(checkPalindrom('madam'))