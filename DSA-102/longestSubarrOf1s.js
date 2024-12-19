// Given a binary array nums, you should delete one element from it.
// Return the size of the longest non-empty subarray containing only 1's in the resulting array. 
// Return 0 if there is no such subarray.

// Example 1:
// Input: nums = [1,1,0,1]
// Output: 3
// Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.
// Example 2:
// Input: nums = [0,1,1,1,0,1,1,0,1]
// Output: 5
// Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].
// Example 3:
// Input: nums = [1,1,1]
// Output: 2
// Explanation: You must delete one element.

function longestSubarray(nums){
    let left=0, zeroCount = 0, maxLength = 0;
    //iterate through the array
    for(let right=0;right<nums.length;right++){
        //if the element is 0
        if(nums[right] === 0){
            //increment zero count
            zeroCount++;
        }
        //shrink the window untill zero count is not less than 1
        while(zeroCount>1){
            //check if element at left idx is 0
            if(nums[left] === 0){
                //decrease zero count
                zeroCount--;
            }
            left++;
        }
        //find the maximum length
        maxLength = Math.max(maxLength,right-left);
    }
    return maxLength;
}
console.log(longestSubarray([0,1,1,1,0,1,1,0,1]));