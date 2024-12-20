// Two strings are considered close if you can attain one from the other using the following 
// operations:
// Operation 1: Swap any two existing characters.
// For example, abcde -> aecdb
// Operation 2: Transform every occurrence of one existing character into another existing character, 
// and do the same with the other character.
// For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
// You can use the operations on either string as many times as necessary.
// Given two strings, word1 and word2, return true if word1 and word2 are close, and false 
// otherwise.

// Example 1:
// Input: word1 = "abc", word2 = "bca"
// Output: true
// Explanation: You can attain word2 from word1 in 2 operations.
// Apply Operation 1: "abc" -> "acb"
// Apply Operation 1: "acb" -> "bca"
// Example 2:
// Input: word1 = "a", word2 = "aa"
// Output: false
// Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
// Example 3:
// Input: word1 = "cabbba", word2 = "abbccc"
// Output: true
// Explanation: You can attain word2 from word1 in 3 operations.
// Apply Operation 1: "cabbba" -> "caabbb"
// Apply Operation 2: "caabbb" -> "baaccc"
// Apply Operation 2: "baaccc" -> "abbccc"

function closeStrings(word1,word2){
    //if length of both the words are not equal retrun false
    if(word1.length !== word2.length){
        return false;
    }
    //create set of both the words
    let word1Set = new Set(word1);
    let word2Set = new Set(word2);
    //if the size of both the words is not equal then return false
    if(word1Set.size !== word2Set.size){
        return false;
    }
    //get the frequency of each character from both the words
    let mp1 = new Map();
    let mp2 = new Map();
    for(let i=0;i<word1.length;i++){
        if(mp1.has(word1[i])){
            mp1.set(word1[i],mp1.get(word1[i])+1);
        }else{
            mp1.set(word1[i],1);
        }
    }
    for(let i=0;i<word2.length;i++){
        if(mp2.has(word2[i])){
            mp2.set(word2[i],mp2.get(word2[i])+1);
        }else{
            mp2.set(word2[i],1);
        }
    }
    //get the values from map and sort them
    let freqList1 = [...mp1.values()].sort((a,b)=>a-b);
    let freqList2 = [...mp2.values()].sort((a,b)=>a-b);

    //lastly check if the frequencies are equal or not 
    return freqList1.join('') === freqList2.join('');
}
console.log(closeStrings("abc","bca"));