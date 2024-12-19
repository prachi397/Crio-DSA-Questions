// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the 
// array if you can flip at most k 0's.

// Example 1:
// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
// Example 2:
// Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10
// Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

function longestOnes(nums,k){
    let left = 0;
    let zeroCount = 0;
    let maxLength = 0;
    //iterate throught the array
    for(let right = 0;right<nums.length;right++){
        //find the element that is 0
        if(nums[right] === 0){
            //as we found 0 increment zerocount
            zeroCount++;
        }
        //loop when zero count became greater than k
        while(zeroCount > k){
            // if the element at left is zero then shrink the window
            if(nums[left] === 0){
                //decrement the czero count
                zeroCount--;
            }
            //increment the left for shrinking the window
            left++;
        }
        //get the maximum length by doing right-left+1
        maxLength = Math.max(maxLength,right-left+1);
    }
    return maxLength;
}
console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0],2));