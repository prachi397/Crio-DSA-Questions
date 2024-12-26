// You are given an array arr[] containing positive integers. The elements in the array arr[] range from 
// 1 to n (where n is the size of the array), and some numbers may be repeated or absent. Your task is to 
// count the frequency of all numbers in the range 1 to n and return an array of size n such that result[i] 
// represents the frequency of the number i (1-based indexing).

// Examples
// Input: arr[] = [2, 3, 2, 3, 5]
// Output: [0, 2, 2, 0, 1]
// Explanation: We have: 1 occurring 0 times, 2 occurring 2 times, 3 occurring 2 times, 4 occurring 0 times, 
// and 5 occurring 1 time.

function frequencyCount(arr){
    const map = new Map();
    let result = [];
    //set frequency of 1 to n is 0 initially
    for(let i=1;i<=arr.length;i++){
        map.set(i,0);
    }
    //get the frequency of array elements
    for(let i=0;i<arr.length;i++){
        map.set(arr[i],(map.get(arr[i])||0)+1);
    }
    //iterate over the map and store the val (frequency into array)
    for(const [_,val] of map){
        result.push(val);
    }
    return result;;
}
console.log(frequencyCount([2, 3, 2, 3, 5]));