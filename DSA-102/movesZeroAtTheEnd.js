// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of 
// the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:
// Input: nums = [0]
// Output: [0]

function moveZeroes(nums){
    let idx = 0;
    //iterate over the array
    for(let i=0;i<nums.length;i++){
        //if the element is not zero
        if(nums[i] !== 0){
            //add it to the array
            nums[idx] = nums[i];
            idx++;
        }
    }
    //iterate from the current index to the end to the array
    for(let i=idx;i<nums.length;i++){
        //add 0 to the rest of indexes
        nums[idx] = 0;
        idx++;
    }
    return nums;
}
console.log(moveZeroes([0,1,0,3,12]));