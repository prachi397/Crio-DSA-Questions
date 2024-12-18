// You are given an integer array nums consisting of n elements, and an integer k.
// Find a contiguous subarray whose length is equal to k that has the maximum average value 
// and return this value. Any answer with a calculation error less than 10-5 will be accepted.

// Example 1:
// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:
// Input: nums = [5], k = 1
// Output: 5.00000

function findMaxAverage(nums,k){
    //calculate the maximum sum using sliding window
    let sum = 0;
    //get the sum of first k elements
    for(let i=0;i<k;i++){
        sum += nums[i];
    }
    //let say the maximum sum is the sum of first k elements
    let maxSum = sum;
    //loop from k to length of the array
    for(let i=k;i<nums.length;i++){
        //get the current window sum -> discarding the first element of the previous window and adding
        //the current element in the window
        sum = sum - nums[i-k] + nums[i];
        //get the maximum sum
        maxSum = Math.max(maxSum,sum);
    }
    //by dividing maximum sum by k we will get average
    return maxSum/k;
}
console.log(findMaxAverage([1,12,-5,-6,50,3],4));