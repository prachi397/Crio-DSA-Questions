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


let arr = [1,5,1,1,6,4];
//optimal approach for wiggle sort TC - O(n)
function wiggleSortOptimal(arr, n){
   //loop through 1 to n the array
   for(let i=1;i<n;i++){
    //logic is element at odd index should be greater than its left and right index element
    //check if odd index and element at odd index is less then the previous element 
    if(i%2 === 1 && arr[i]<arr[i-1]){
        //swap element at ith index to (i-1)th element
        [arr[i],arr[i-1]] = [arr[i-1],arr[i]];
    }
    //for even index the element should be less than the next element(odd) so it it is greater then 
    //we are swapping
    if(i%2 === 0 && arr[i]>arr[i-1]){
        //swap the elements
        [arr[i],arr[i-1]] = [arr[i-1],arr[i]];
    }
   }
   return arr;
}
console.log(wiggleSortOptimal(arr, 6));