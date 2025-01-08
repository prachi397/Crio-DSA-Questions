// Insert duplicate of K adjacent to it for it’s every occurrence in array
// Last Updated : 08 Feb, 2022
// Given an array arr consisting of N integers and an integer K, the task is to insert an adjacent K for
// every occurrence of it in the original sequence and then truncate the array to the original length
// using an O(1) auxiliary space.

// Examples:
// Input: arr[] = {1, 0, 2, 3, 0, 4, 5, 0}, K = 0
// Output: {1, 0, 0, 2, 3, 0, 0, 4}
// Explanation:
// The given array {1, 0, 2, 3, 0, 4, 5, 0} is modified to {1, 0, 0, 2, 3, 0, 0, 4] after insertion of
// two 0’s and truncation of extra elements.

//brute force approach - tc O(n*n) and sc is O(1)
function duplicateK(arr, k) {
  let n = arr.length - 1;
  //iterate over the array
  for(let i=0;i<n;i++){  //O(n)
    if(arr[i] === k){  //if current element is equal to k
        arr.splice(i+1,0,k);   // add k next to the current element - tc O(n)
        i++;  //incrementing i to skip the next added k element
        arr.pop();  //lastly pop to maintain the array size
    }
  }
  return arr;
}
console.log(duplicateK([1, 0, 2, 3, 0, 4, 5, 0], 0));
