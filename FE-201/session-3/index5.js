// Problem Description
// You need to implement the function subarray() in which you are given an array named arr, 
// and two integers start, end. You need to implement the function to return a subarray 
// starting from index start and ending on index end.
// Note: Use the slice method of Array.

// Sample Input --->
// [0, 2, 4, 6], 1, 3
// Sample Output --->
// [2, 4, 6]

function subarray(arr, start, end) {
    return arr.slice(start, end + 1);
}

if (JSON.stringify(subarray([1, 2, 3, 4, 5], 2, 3)) !== JSON.stringify([3, 4]))
    console.log("Test fails: Expected [3,4] for input arr = [1,2,3,4,5], start = 2, end = 4");
else
    console.log("Sample test case for input arr = [1,2,3,4,5], start = 2, end = 4 passed!");