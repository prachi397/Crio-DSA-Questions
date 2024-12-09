// Problem Description --->
// You are given an array of N non-negative integers where each represents the height of a line.
// N vertical lines are drawn at points marked 1 to n on the x axis as shown in the diagram. Find two
// lines, which together with the x axis forms a container, such that the container holds the most
// water. Assume the width of lines to be negligible.
// Note: You may not slant the container and n is at least 2.
// Sample Input --->
// 9
// 1 8 6 2 5 4 8 3 7

// Sample Output --->
// 49

// Explanation --->
// The lines of length 8 and 7 form a container that can hold 7*7=49 units of water. Here, the
// first 7 is the minimum of the two line heights and the second 7 is the number of units they
// are apart. This is the largest container that can be formed with the given input.

function maxArea(height) {
  let maxArea = 0,
    left = 0,
    right = height.length - 1;
    //iterate through the array
  while (left < right) {
    //find the minimum height
    let minHeight = Math.min(height[left], height[right]);
    //calculate the area of container -> height*width
    let area = minHeight * (right - left);
    maxArea = Math.max(maxArea, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
