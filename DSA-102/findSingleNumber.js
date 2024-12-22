// Given a non-empty array of integers nums, every element appears twice except for one. Find that 
// single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1
// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:
// Input: nums = [1]
// Output: 1

//here logic is if we do xor of two numbers then the same digit will always gives 0 and value is 1 
// when digits are different
function singleNumber(nums){
    let result = 0;
    for(let i=0;i<nums.length;i++){
        result ^= nums[i];  //xor of the current element with the result
    }
    return result;
}
console.log(singleNumber([4,1,2,1,2]))