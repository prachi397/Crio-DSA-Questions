// Problem Description
// An array sorted in ascending order is rotated about a pivot unknown to you. Such an array is referred
// to as a rotated sorted array or a sorted-pivoted array. For example : [1,2,3,4,5] is a sorted array
// while [3,4,5,1,2] is a rotated sorted array.
// You are given a rotated sorted array, and some integer values. You have to find each value’s location
// in the array. If the value is present, return the index in which it is stored ( 0 based indexing) ,
// otherwise if not found return -1.

// int : An integer denoting the index of the target to be searched. If target not present returns -1.
// Assume the array doesn’t have duplicates.

// Input format --->
// There are Q+3 lines of input.
// First line will have a single integer N denoting the size of the array.
// Second line will contain N space separated integers.
// Third line will contain a single integer Q denoting the number of targets to be searched..
// Next Q lines will have a single integer,X in each line denoting the target value. You have to
// search for each of these target values in turn.

// Output format --->
// One line per output for each target search, with -1 or the index at which the integer is found.

// Sample Input --->
// 7
// 4 5 6 9 10 2 3
// 2
// 3
// 8

// Sample Output --->
// 6
// -1

// Explanation --->
// The element 3 is found in the array at index 6. Element 8 is not found in the array, thus -1.

// Sample Input --->
// 6
// 5 6 8 1 3 4
// 1
// 0

// Sample Output --->
// -1

// Explanation --->
// The element 0 is not found in the array.

//brute force approach - TC- O(n)
function searchBrute(arr, target) { 
   for(let i=0;i<arr.length;i++){
    if(arr[i] === target){
        return i;
    }
   }
   return -1;
  }
  console.log(searchBrute([4, 5, 6, 9, 10, 2, 3], 3));

// first find the pivot element (element which is slope between the rotated arrays, a point from where the
// array is rotated) - TC-O(logn)
function findPivot(arr) {
  let left = 0,
    right = arr.length - 1,
    pivot = 0;
    //loop untill left and right crosses
  while (left <= right) {
    //get the mid index
    let mid = Math.floor((left + right) / 2);
    //here the observation is in the 2nd part of the array all the elements will be lesser than arr[0]
    //check if mid element is less than arr[0] that means mid lies in 2nd portion of the array
    if (arr[mid] < arr[0]) {
        //that mean mid and after mid there will no pivot because pivot should be greater element
      right = mid - 1;
    } 
    //if pivot element is greater than arr[0] that means it is in first portion of array
    else {
        //set mid as pivot
      pivot = mid;
      //set left as mid+1
      left = mid + 1;
    }
  }
  //return pivot index
  return pivot;
}

//function to search the target element in sorted array (binary search) -  TC-O(logn)
function binarySearch(arr, target, left, right) {
    //loop untill left and right do not cross
  while (left <= right) {
    //get mid index
    let mid = Math.floor((left + right) / 2);
    //if mid element is equal to target
    if (arr[mid] === target) {
        //return mid
      return mid;
    } 
    //if mid is less than target that means the element lies after mid
    else if (arr[mid] < target) {
      left = mid + 1;
    }
    //if mid is greater than element that means element lies before mid
     else {
      right = mid - 1;
    }
  }
  //if we do not find target return -1
  return -1;
}

//TC-O(logn)
function search(arr, target) { 
  //find pivot index by calling findPivot function
  let pivotIdx = findPivot(arr);
  //if the element to be searched is greater than arr[0] then search in first portion of array
  if (target >= arr[0] && target <= arr[pivotIdx]) {
    return binarySearch(arr, target, 0, pivotIdx);
  } 
  //search in second portion of array
  else {
    return binarySearch(arr, target, pivotIdx + 1, arr.length - 1);
  }
}
console.log(search([4, 5, 6, 9, 10, 2, 3], 9));

// overall TC-O(logn)
