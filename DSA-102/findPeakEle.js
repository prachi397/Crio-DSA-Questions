// Problem Description
// A peak element is an element that is strictly greater than its neighbors. Given an integer array nums, 
// find a peak element, and return its index. If the array contains multiple peaks, return the index to 
// any of the peaks. You may imagine that nums[-1] = nums[n] = -∞. You must write an algorithm that runs 
// in O(log n) time.

// Sample Input --->
// 4

// 1 2 3 1

// Sample Output --->
// 2

// Explanation --->
// 3 is a peak element and your function should return the index number 2.

function peakElement(nums) {
    let left = 0, right = nums.length-1;
    //untill left and right crossed
    while(left<=right){
        //get mid element
        let mid = Math.floor((left+right)/2);
        let leftVal;
        let rightVal;
        //if mid is 0 then there will be no element at left so make leftVal -infinity as said
        if(mid === 0){
            leftVal = Number.NEGATIVE_INFINITY;
        }
        //if mid is last element of array then make rightVal as -infinity
        if(mid == nums.length-1){
            rightVal = Number.NEGATIVE_INFINITY;
        }
        //get left and right value of mid
        leftVal = mid-1;
        rightVal = mid+1;
        //check if element at mid is greater than its left and right elements
        if(nums[mid]>nums[leftVal] && nums[mid]>nums[rightVal]){
            //return mid as it is peak
            return mid;
        }
        //check if element at mid is less than left element then peak will be left side
        else if(nums[mid] < leftVal){
            right = mid-1;
        }
        //else case i.e, element at mid is less that right element so peak will be right side
        else{
            left = mid+1;
        }
    }
}
console.log(peakElement([1,2,3,1]))

//here TC - O(logn)