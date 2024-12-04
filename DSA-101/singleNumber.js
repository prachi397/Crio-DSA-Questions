// Problem Description
// You are given a non-empty array of integers arr, where every element appears twice except for one. 
// Your task is to implement a program that takes the input as an array of integers and returns the element that appears only once.

// Sample Input -->
// 3
// 2 2 1

// Sample Output -->
// 1

function findSingleNumber(arr){
    let mp = new Map();
    //find frequency of each element of array
    for(const i of arr){
        let freq = mp.get(i)||0;
        mp.set(i,freq+1);
    }
    //find the element which has frequency 1
    for(const entry of mp){
        let key = entry[0];
        let value = entry[1];
        if(value === 1){
            return key;
        }
    }
}
let arr = [2,2,3,4,4];
console.log(findSingleNumber(arr));