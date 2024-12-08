// Problem Description
// Given an array of integers as input, output the indices of two numbers in the array which add up
// to a specified target. Assume that each input would have exactly one solution and you cannot use
// the same element twice. If 2 different elements have the same value, they can be used.
// Print the indices in increasing order.

// Sample Input --->
// 5 --> Number of elements in array
// 2 4 5 9 8 --> Array elements
// 7 --> Target sum value

// Sample Output --->
// 0 2

// Explanation --->
// Since 0 and 2 are the indices where the numbers 2 and 5 which add up to 7 are seen

function twoSumBetter(nums, target) {
  let result = [];
  //iterate through the array
  for (let i = 0; i < nums.length; i++) {
    //store element of the array with their respective indices
    result.push([nums[i], i]);
  }
  //sort the array elements
  result.sort((a, b) => a[0] - b[0]);
  //apply the same logic to find sum with sorted array
  let left = 0,
    right = result.length - 1;
  while (left < right) {
    let sum = result[left][0] + result[right][0];
    if (sum === target) {
      return [result[left][1], result[right][1]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
}
//here TC- O(nlogn) and SC - O(n)
// console.log(twoSumBetter([2, 3, 4, 5, 9, 8], 7));

//optimal apprach using map --> here both TC and SC are O(n)
function twoSumOptimal(nums,target){
    let mp = new Map();
    //iterate over the array
    for(let i=0;i<nums.length;i++){
        // target = x + nums[i] and we have to find value of x, so we can 
        //write x = target - nums[i]
        let x = target - nums[i];
        //check if the elemenet is present in map
        if(mp.has(x)){
            let j = mp.get(x);
            return [j,i];
        }
        //if not presnt then add the element to the map
        else{
            mp.set(nums[i],i);
        }
    }
}
console.log(twoSumOptimal([2, 4, 5, 9, 8], 7));