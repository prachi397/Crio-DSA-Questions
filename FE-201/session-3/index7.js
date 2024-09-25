// Problem Description
// You are given a string str as an argument. Use the Join method in the sentensify function 
// to make a sentence from the words in the string str. The function should return a string.
// Note:-Do not use the replace method.
// Sample Input ---->
// I-like-Star-Wars
// Sample Output ---->
// I like Star Wars

function sentensify(str) {
    let wordArr = str.split(/\W+/);
    return wordArr.join(' ');
}
console.log(sentensify('I-like-Star-Wars'));