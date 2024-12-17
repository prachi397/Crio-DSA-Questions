// Given an input string s, reverse the order of the words.
// A word is defined as a sequence of non-space characters. The words in s will be separated by 
// at least one space.
// Return a string of the words in reverse order concatenated by a single space.
// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned
// string should only have a single space separating the words. Do not include any extra spaces.

// Example 1:
// Input: s = "the sky is blue"
// Output: "blue is sky the"
// Example 2:
// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.
// Example 3:
// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the 
// reversed string.

//brute force approach
function reverseWordsBrute(s){
    //replace(/\s+/g, ' ') it is replacing all the extra spaces to a single space
    let arr = s.replace(/\s+/g, ' ').trim().split(' ').reverse().join(' ');
    return arr;
}
//appraoch without using inbuilt functions
function reverseWords(s) {
    let word = '';
    let wordArr = [];
    //loop through the string
    for(let i=0;i<s.length;i++){
        //if we don't found space
        if(s[i] !== ' '){
            //add the character into word
            word += s[i];
        }
        //as soon as we found space that means it is a word
        else{
            //push the word in into wordArr
            wordArr.push(word);
            //and then empty the word again to add the new word
            word = '';
        }
    }
    //for the last word because we may not found any space after the last element
    if(word.length>0){
        //push it as well in word arr
        wordArr.push(word);
    }
    // return wordArr.reverse().join(' '); //we can do this
    let result = '';
    //iterate from backside of the array
    for(let i=wordArr.length-1;i>=0;i--){
        result += wordArr[i];
        //adding space after each word
        result+=" ";
    }
    //remove the extra spaces and return the result 
    return result.replace(/\s+/g,' ').trim();;
};
console.log(reverseWords('the sky is blue'));

//TC  for both the approaches is O(n) and SC will also O(n).