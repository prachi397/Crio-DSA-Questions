// Problem Description
// Given a string, count the total number of vowels present in that string.
// Sample Input 1
// language
// Sample Output 1
// 4

function countVowels(str){
    let vowelArr = ['a','A','e','E','i','I','o','O','u','U'];
    let count = 0;
    for(let i=0;i<str.length;i++){
        if(vowelArr.includes(str[i])){
            count++;
        }
    }
    return count;
}
console.log(countVowels('language'));