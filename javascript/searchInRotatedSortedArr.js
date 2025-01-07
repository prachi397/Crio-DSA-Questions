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

//optimal approach using binary search

//function to find pivot element, where the slop begans
//here the loigc to find pivot is that the element which appears in first segment will be greater than or equal
//to the first element and the element of second segment will always less than the first element
function findPivot(nums){
    let left=0, right = nums.length-1;
    let ans = 0;
    while(left<=right){
        //get the mid
        let mid = Math.floor((left+right)/2);
        //check if mid lies in first segment
        if(nums[mid]>=nums[0]){
            ans = mid;  //update the answer to mid
            left = mid+1;  //and search from the right side of mid
        }
        //if mid lies in second segment
        else{
            right = mid-1;
        }
    }
    return ans;
}
//function to perform binary search
function binarySearch(nums,left,right,target){
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid] === target){
            return mid;
        }else if (nums[mid]>target){
            right = mid-1;
        }else{
            left = mid+1;
        }
    }
    return -1;
}

function searchOptimal(nums, target){
   //find the pivot element
   let pivotIdx = findPivot(nums);
   //find the target in first segment
   let leftAns = binarySearch(nums,0,pivotIdx,target);
   if(leftAns !== -1){
    return leftAns;
   }
   //find the target in second segment
   return binarySearch(nums,pivotIdx+1,nums.length-1,target);
}
console.log(searchOptimal([4,5,6,7,0,1,2],7));

//here tc is O(logn) and sc is O(1)