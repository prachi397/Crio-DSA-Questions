// Problem Description
// You are given two strings, a main string S, and a pattern P. You have to find the starting indices 
// of the anagrams of P in S.
// Anagrams are permutations of a string. For P="abc”, its anagrams are abc,acb,bca,bac,cba,cab.
// Note that indexing starts at 0.
// Input format
// There is one line of input, containing two space-separated strings S and P.
// Output format
// First-line should contain the number of such starting indices.
// Next line should contain the indices in increasing order separated by a space.

// Sample Input -->
// aaba ab
// Sample Output -->
// 2
// 1 2
// Explanation -->
// The anagrams of pattern "ab" are “ab” and “ba”. These are present at indices 1 and 2 of the input 
// string “aaba”.

//helper function to comapre maps
function compareMaps(map1,map2){
    //return false if map size is not equal
    if(map1.size !== map2.size){
        return false;
    }
    //iterate over one map
    for(const [key,val] of map1){
        //check if the value of the same key of map2 is equal the value of map1
        if(map2.get(key) !== val){
            return false;
        }
    }
    return true;
}
function findAllAnagramsInAString(s, p) {
    const mp1 = new Map();
    const ans = [];
    //iterate over the string p and get the frequency
    for(let i=0;i<p.length;i++){
        if(mp1.has(p[i])){
            mp1.set(p[i],mp1.get(p[i])+1);
        }else{
            mp1.set(p[i],1);
        }
    }
    const mp2 = new Map();
    //find anagram in first window of length equal to p.length (fixed size sliding window)
    for(let i=0;i<p.length;i++){
        //get the frequency
        mp2.set(s[i],(mp2.get(s[i])||0)+1);
    }
     // Check if the first window is an anagram
     if (compareMaps(mp1, mp2)) {
        ans.push(0);
    }
    //slide the window
    for(let i=p.length;i<s.length;i++){
        //get the frequency of string s
        mp2.set(s[i],(mp2.get(s[i])||0)+1);
        //left element to be excluded from the window
         let leftEle = s[i-p.length];
         //if frquency of left element is one then delete it
         if(mp2.get(leftEle) === 1){
            mp2.delete(leftEle);
         }
         //otherwise reduce its frequency to 1
         else{
            mp2.set(leftEle,mp2.get(leftEle)-1);
         }
         //compare both the maps and if equal
         if(compareMaps(mp1,mp2)){
            //push the first index into the answer array
            ans.push(i-p.length+1);
         }
    }
    //return answer array
    return ans;
}
console.log(findAllAnagramsInAString("bacdgabcda","abcd"));

//here tc is O(n) and SC is O(n) because map take constant time and space compexity, here we
// are considering space complexity n just because the answer array