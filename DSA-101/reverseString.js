// Problem Description
// Write a program that reverses a string.
// Sample Input 1
// abc
// Sample Output 1
// cba

function reverseString(str){
    let reverseStr = '';
    for(let i=str.length-1;i>=0;i--){
        reverseStr += str[i];
    }
    return reverseStr;
}

console.log(reverseString('abc'));