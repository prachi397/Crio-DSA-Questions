// Problem Description
// Given an array of integers, sort the array based on the absolute value of the elements.

// Sample Input --->
// 5
// 2 -5 1 -2 4

// Sample Output --->
// 1 2 -2 4 -5

// Explanation --->
// Absolute values of elements are [2,5,1,2,4] respectively, so in the sorted order based on 
// absolute values elements will be [1,2,-2,4,-5] or [1,-2,2,4,-5]. Both are accepted answers.

function sortArrayAbsolute(nums){
    //sort the array and apply Math.abs to each element of array
    nums.sort((a,b)=>Math.abs(a)-Math.abs(b));
    return nums;
}
console.log(sortArrayAbsolute([2,-5,1,-2,4]))