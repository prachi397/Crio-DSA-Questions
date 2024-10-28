// Problem Description
// Write a program that takes a list of words arr[] as input and returns the most occurring word in arr[].
// It is guaranteed that if there are multiple words with the same frequency, the program should return 
// the lexicographically minimum string among them.
// Input format
// The first line contains an integer N, the number of words in the array.
// The next N lines contain the words in the array.
// Output format
// Return the most occurring word in the array.
// Sample Input --->
// 4
// hello
// world
// crio
// crio

// Sample Output --->
// crio

function maxRepeatingWord(arr){
    let mp = new Map();
    for(let i=0;i<arr.length;i++){
        if(mp.has(arr[i])){
            mp.set(arr[i], mp.get(arr[i])+1);
        }else{
            mp.set(arr[i],1);
        }
    }
    let ans = '', count=0;
    for(const entry of mp){
        const key = entry[0];
        const value = entry[1];
        if(value>count){
            ans = key;
            count=value;
        }else if(value === count){
            if(key<ans){
                ans=key;
            }
        }
    }
    return ans;
}
let arr = ['hello','world','crio','crio'];
console.log(maxRepeatingWord(arr));