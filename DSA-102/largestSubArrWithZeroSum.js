// Problem Description
// Given an integer array, find the largest subarray with sum 0 . If there is more than one subarray 
// with the largest length, return the subarray with the lowest starting index.
// If there is no such sub-array print -1.

// Sample Input -->
// 6
// 2 3 1 -4 0 6

// Sample Output -->
// 3 1 -4 0

// Explanation -->
// The largest subarray with sum zero is (3, 1, -4, 0)

function largestSubarraySumZero(n, arr) {
    //create a empty map
    let mp = new Map();
    //store sum as 0 at -1 index in map (sum-index)
    mp.set(0,-1);
    let sum = 0, answerLeft=-1,answerRight=-1;
    //loop through the entire array
    for(let right = 0;right<n;right++){
        //calculate current sum
        sum += arr[right];
        //check if the sum is present in the map 
        if(mp.has(sum)){
            //left will be the index where sum is present +1
            let left = mp.get(sum)+1;
            //check if the length of the new arr having sum 0 is greater than the length of previous arr
            if(right-left+1 > answerRight-answerLeft+1){
                answerLeft = left;
                answerRight = right
            }        
        }
        //if sum is not present then add it to the map with its index
        else{
            mp.set(sum,right);
        }
    }
    //handling corner case when the subarr will start from the starting point of the arr
    if(answerLeft != -1){
        return arr.slice(answerLeft,answerRight+1);
    }
    //if no subarray found then return -1
    return -1;
}
console.log(largestSubarraySumZero(6,[2,3,1,-4,0,6]));