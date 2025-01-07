// Problem Description
// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
// You are given a target value to search. If found in the array return its index, otherwise return -1 and 
// this search has to be done Q times.
// You may assume no duplicate exists in the array.
// Input format
// First line will have a single integer N denoting the size of the array.
// Second line will contain N space seperated integers.
// Third line will contain a single integer Q.
// Next Q line will have a single integer in each line denoting the target value.
// Output format
// Print Q lines, each containnig the required single integer.
// Sample Input 1
// 7
// 4 5 6 7 0 1 2
// 2
// 0
// 3
// Sample Output 1
// 4
// -1
// Explanation
// 0 is present at index 4 in the array.
// 3 is not present in the array.

//brute force approach - linear search tc O(n) and sc O(1)
function search(nums, target){
    //iterate over the array
    for(let i=0;i<nums.length;i++){
        //if found the target then return its index
        if(nums[i] === target){
            return i;
        }
    }
    return -1;
}
console.log(search([4,5,6,7,0,1,2],6));