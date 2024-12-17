// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order,
// starting with word1. If a string is longer than the other, append the additional letters onto the 
// end of the merged string.
// Return the merged string.
// Example 1 --->
// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r

const mergeAlternately=(str1, str2)=>{
    //take two pointers
    let i=0, j=0;
    let mergedStr = '';
    //loop untill one array is not completely traversed
    while(i<str1.length && j<str2.length){
        //add the character of the first string into merged string
        mergedStr += str1[i];
        i++;
        //add the character of the second string into merged string
        mergedStr += str2[j];
        j++;
    }
    //if the second string is completely traversed but the first string has some elements left
    while(i<str1.length){
         //add the remaining character of the first string into merged string
         mergedStr += str1[i];
         i++;
    }
     //if the first string is completely traversed but the second string has some elements left
     while(j<str2.length){
        //add the remaining character of the second string into merged string
        mergedStr += str2[j];
        j++;
   }
   //return the merged string
   return mergedStr;
}
console.log(mergeAlternately("abc","pqr"));