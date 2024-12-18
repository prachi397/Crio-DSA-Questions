// Given an integer array nums, return an array answer such that answer[i] is equal to the product of
// all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

//here tc and sc both are O(n)
function productExceptSelf(nums) {
  let asnwer = [];
  //get the prefix product
  //for the first element prefix will be 1 always
  let prefixProd = [];
  prefixProd[0] = 1;
  //iterate through the array from 1 to length because we alreay have prefixProf for 0th ele
  for (let i = 1; i < nums.length; i++) {
    prefixProd[i] = prefixProd[i-1]*nums[i-1];
  }
  //get the suffix product
  let suffixProd = [];
  //for the last element suffix will be always 1
  suffixProd[nums.length-1] = 1;
   //iterate through the array from second last ele to 0 because we alreay have suffixProd for last ele
  for(let i=nums.length-2;i>=0;i--){
    suffixProd[i] = suffixProd[i+1]*nums[i+1];
  }
  //multiply suffix and prefix products
  for(let i=0;i<nums.length;i++){
    asnwer[i] = prefixProd[i]*suffixProd[i];
  }
  return asnwer;
}
console.log(productExceptSelf([-1,1,0,-3,3]));

//lets try to reduce space complexity here
function productExceptSelfOptimal(nums){
    let answer = [];
    let prefix = 1;
    //get prefix product of each element and store it into answer
    for(let i=0;i<nums.length;i++){
        answer[i] = prefix;
        prefix *= nums[i]
    }
    //get the suffix product of each element and multiply it with the prefix product of that, 
    //particular product
    let suffix = 1;
    for(let i=nums.length-1;i>=0;i--){
        answer[i] *= suffix;
        suffix *= nums[i];
    }
    return answer;
}
console.log(productExceptSelfOptimal([1,2,3,4]));