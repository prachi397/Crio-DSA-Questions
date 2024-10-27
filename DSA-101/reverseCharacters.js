// Problem Description
// Write a program to reverse the words present in a sentence.
// Input format
// First line contains an string consisting of words separated by spaces.
// Output format
// Return the string with it's words reversed.
// Sample Input -->
// abc def ghi
// Sample Output -->
// cba fed ihg\

function reverseCharacters(str){
    let rerverseStr = '';
    let word = '';
    for(let i=0;i<str.length;i++){
        if(str[i]!== ' '){
            //revrese the string and the rerverse string to the word
            word = str[i]+word;
        }else{
            // add the reversed words into rerverseStr
            rerverseStr += word+' ';
            word='';
        }
    }
    //add the last reversed word
    rerverseStr += word;
    return rerverseStr;
}
console.log(reverseCharacters('abc def ghi'));