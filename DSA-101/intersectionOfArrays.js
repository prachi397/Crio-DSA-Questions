// Problem Description
// Given two arrays A and B, write a function to compute their intersection.
// Note: Each element in the result should appear as many times as it shows in both arrays.
// The result needs to be in sorted order.

// Sample Input -->
// 4
// 1 2 2 1
// 2
// 2 2

// Sample Output -->
// 2 2

function intersectionOfTwoArrays(nums1,nums2){
    let mp = new Map();
    // calculate the frequency of each element in nums1
    for(const i of nums1){
        let freq = mp.get(i)||0;
        mp.set(i,freq+1);
    }
    let result = [];
    //get frequency of nums2
    for(const i of nums2){
        let freq = mp.get(i)||0;
        // checking if freq of a particular key is already more than 0, then it is common
        if(freq>0){
            result.push(i);
            mp.set(i,freq-1);
        }
    }
    //sort the result
    result.sort((a,b)=>a-b);
    return result;
}
let arr1 = [1,2,2,1];
let arr2 = [2,2]
console.log(intersectionOfTwoArrays(arr1,arr2));