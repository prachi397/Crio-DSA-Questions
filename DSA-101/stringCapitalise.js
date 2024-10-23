// Problem Description
// Given a paragraph of words, capitalize the first character of each word and return the paragraph.
// Input format
// First line contains a string - The paragraph.
// Output format
// Print the paragraph after capitalizing each word.
// Sample Input --->
// the quick Brown fox jumps over The lazy dog.
// Sample Output --->
// The Quick Brown Fox Jumps Over The Lazy Dog.

function capitalizedString(para){
    //first approach
    let word = para.split(' ');
    return word.map((word)=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
}
console.log(capitalizedString("the quick Brown fox jumps over The lazy dog."));