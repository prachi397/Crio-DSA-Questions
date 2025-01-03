// You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.

// You should return the array of nums such that the the array follows the given conditions:

// Every consecutive pair of integers have opposite signs.
// For all integers with the same sign, the order in which they were present in nums is preserved.
// The rearranged array begins with a positive integer.
// Return the modified array after rearranging the elements to satisfy the aforementioned conditions.

// Example 1:
// Input: nums = [3,1,-2,-5,2,-4]
// Output: [3,-2,1,-5,2,-4]
// Explanation:
// The positive integers in nums are [3,1,2]. The negative integers are [-2,-5,-4].
// The only possible way to rearrange them such that they satisfy all conditions is [3,-2,1,-5,2,-4].
// Other ways such as [1,-2,2,-5,3,-4], [3,1,2,-2,-5,-4], [-2,3,-5,1,-4,2] are incorrect because they do 
// not satisfy one or more conditions.  

//brute force approach
function rearrangeArrayBruteForce(nums){
    //get the positive and negative numbers into separate arrays
    let positive = [], negative = [];
    for(let i=0;i<nums.length;i++){
        if(nums[i]>=0){
            positive.push(nums[i]);
        }else{
            negative.push(nums[i]);
        }
    }
    //as mentioned we have even number of elements so loop till n/2
    for(let i=0;i<nums.length/2;i++){
        nums[2*i] = positive[i];  //add positive numbers in even positive
        nums[2*i+1] = negative[i]; //negative numbers in negative position
    }
    return nums;
}
console.log(rearrangeArrayBruteForce([3,1,-2,-5,2,-4]));

//here tc will be O(n) and sc will be O(n)

//optimal approach
function rearrangeArrayOptimal(nums){
    //start with positive and negative indexes
    let postiveIdx = 0, negativeIdx = 1;
    let ans = new Array(nums.length);
    //iterate over the array
    for(let i=0;i<nums.length;i++){
        //if number is negative
        if(nums[i]<0){
            //push it at negative index and increase index by 2
            ans[negativeIdx] = nums[i];
            negativeIdx += 2;
        }
        //if it is positive push it into positive index and increase index by 2
        else{
            ans[postiveIdx] = nums[i];
            postiveIdx += 2;
        }
    }
    return ans;
}
console.log(rearrangeArrayOptimal([3,1,-2,-5,2,-4]));