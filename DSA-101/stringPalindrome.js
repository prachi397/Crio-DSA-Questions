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
    // let reverseStr = ''
    // for(let i=str.length-1;i>=0;i--){
    //     reverseStr += str[i];
    // }
    // return (reverseStr === str);

    //second approach using two pointer
    let start = 0;
    let end = str.length-1;
    while(start<end){
        if(str[start] !== str[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;
}
console.log(checkPalindrom('madam'))