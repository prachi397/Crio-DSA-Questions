// Problem Description
// Given a sorted array of integers and a target, find if there’s a pair of elements that add up to the
// target. Return true if such a pair can be found, and false otherwise.
// Input format --->
// There are 3 lines of input.
// First line contains an Integer N that represents the number of elements in the array.
// Second line contains N space separated integers, which are members of the array.
// Third line contains an integer X, which is the target value.

// Output format --->
// Print "Present" if there is such a pair present in the array otherwise print "Not Present".

// Sample Input --->
// 5 --> Number of elements in array
// 2 4 5 8 9 --> Array elements
// 7 --> Target sum value

// Sample Output --->
// Present

function twoSumInSortedArray(n, arr, target_sum) {
  let left = 0,
    right = n - 1;
    //two pointer approach
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target_sum) {
      return "Present";
    } else if (sum < target_sum) {
      left++;
    } else {
      right--;
    }
  }
  return "Not Present";
}
console.log(twoSumInSortedArray(5, [2, 4, 5, 8, 9], 7));
