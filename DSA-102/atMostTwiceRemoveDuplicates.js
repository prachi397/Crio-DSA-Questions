// Problem Description
// Given a sorted array, remove the duplicates in-place, such that each element in the array appears
// at most twice, and return the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array
// in-place with O(1) extra memory.

// Sample Input --->
// 7
// 2 2 2 3 4 4 9

// Sample Output --->
// 6
// 2 2 3 4 4 9

// Explanation --->
// Your function should return 6 as the element 2 can only be present at most 2 times. So the
// first 6 elements of array nums should be modified to [2, 2, 3, 4, 4, 9].

function removeDuplicatesFromSortedArrayII(n, arr) {
  let startIndex = 0,
    currentIndex = 0,
    currentElement = -1,
    count = 0;
  //iterate through the arrat
  while (currentIndex < n) {
    //if array element is eqal to the currentElement then increment count
    if (arr[currentIndex] === currentElement) {
      count++;
    } // if not then assign the array element to current element
    else {
      currentElement = arr[currentIndex];
      count = 1;
    }
    //check if count is less than or eqaul to 2, then add it to array
    if (count <= 2) {
      arr[startIndex] = currentElement;
      startIndex++;
    }
    currentIndex++;
  }
  return arr;
}
console.log(removeDuplicatesFromSortedArrayII(7, [2, 2, 2, 3, 4, 4, 9]));
