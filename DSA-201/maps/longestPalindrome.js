// Problem Description
// You are given a string consisting of lower and upper case characters.
// You need to find the length of the longest palindrome which you can create by using the characters 
// from the string.
// Note: Upper case and lower case characters are different from each other i.e, "Aa" is not a 
// palindrome as 'A' != 'a'.

// Sample Input -->
// 4 bbde
// Sample Output -->
// 3
// Explanation
// The possible 3 size palindrome strings are :- beb and bdb

//logic is if a character is occuring even times then we can make palindrome with all occurances,
//but if it is appering odd times then we can include even occurance of this i.e, count-1,
//and additional 1 whihc is odd can pe place in middle od the string, eg: aacbb
function longestPalindrome(str) {
    const mp = new Map();
    let ans = 0;
    //get frequency of each character
    for(let i=0;i<str.length;i++){
        mp.set(str[i], (mp.get(str[i])||0)+1);
    }
    let isOdd = false;
    //iterate over the map
    //here we are not using key anywhere so we can replace it by _
    for(const [key,count] of mp){
        if(count%2 === 0){
            ans += count;
        }else{
            ans += count-1;
            isOdd = true;
        }
    }
    if(isOdd){
        ans += 1;
    }
    return ans;
}
console.log(longestPalindrome("bbde"));

//here TC is O(n) and SC is O(1);