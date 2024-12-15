// Problem Description
// Given an unsorted array, sort it in wave form. That is, reorder it such that 
// nums[0] <= nums[1] >= nums[2] <= nums[3]....

// Sample Input --->
// 6
// 1 5 1 1 6 4

// Sample Output --->
// 1 4 1 5 1 6

// Explanation --->
// nums[0] <= nums[1] >= nums[2] <= nums[3] >= nums[4] <= nums[5].

//brute force approach
function wiggleSort(arr, n){
    //sort the entire array in acending order
    arr.sort((a,b)=>a-b);
    //loop through 1 to n-1 for odd indexes only
    for(let i=1;i<n-1;i+=2){
        [arr[i],arr[i+1]] = [arr[i+1],arr[i]];
    }
    return arr;
}
let arr = [1,5,1,1,6,4];
console(wiggleSort(arr, 6));