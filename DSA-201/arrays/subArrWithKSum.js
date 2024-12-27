// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:
// Input: nums = [1,1,1], k = 2
// Output: 2

// Example 2:
// Input: nums = [1,2,3], k = 3
// Output: 2

//brute force approach
function subarraySum(nums,k){
    let count = 0;
    //iterate from 0 to n
    for(let i=0;i<nums.length;i++){
        //set sum to 0
        let sum = 0;
        //iterate from i to n
        for(let j=i;j<nums.length;j++){
            //get sum
            sum += nums[j];
            //if sum is equal to k increase count
            if(sum === k){
                count++;
            }
        }
    }
    return count;
}
console.log(subarraySum([1,1,1],2));
//here tc is O(n*n) and sc is O(1)