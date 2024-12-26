// Problem Description
// You are given two strings and an integer k,find whether the given two strings are similar or not. Two given 
// strings s1 and s2 are similar if for each character the difference between the frequency of that character 
// in s1 and s2 is at most k. If the given strings are similar then print Yes otherwise print No. 
// (Note : Both strings s1 and s2 are in lowercase )

// Sample Input 1
// 2 - K
// aaabc
// abc
// 3 - K
// xyzzzbbbbbxx
// bxy

// Sample Output 1
// Yes
// No
// Explanation
// In the first test case, the difference between each and every characters frequency in both the strings is 
// at most 2. Hence, they are similar strings.
// In the second test case, the difference between the frequency of letter b in first string and the 
// frequency of letter b in second string is 4. Hence, they are not similar strings.
function findFrequency(str){
    const map = new Map();
    for(let i=0;i<str.length;i++){
        map.set(str[i],(map.get(str[i])||0)+1);
    }
    return map;
}
function similarString(s1,s2, k){
    //get freqency of both the strings
    const freq1 = findFrequency(s1);
    const freq2 = findFrequency(s2);
    
    //itrate over a frequency map
    for(const [key,val] of freq1){
        //if the character present in another string then get its frequency otherwise set it 0;
        let freqChar = freq2.get(key)||0;
        if(Math.abs(freqChar-val) > k){
            return false;
        }
    }
    return true;
}
console.log(similarString("aabc","abc",2));