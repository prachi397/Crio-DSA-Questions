// Problem Description
// A non-decreasing array is an array of numbers in which each element is either equal to or 
// greater than the previous one.
// For example, consider an array called 'nums'.
// If nums[i] <= nums[i + 1] holds for every i (0-based), then the array will be non-decreasing.
// Implement the function checkNonDecreasing() that
// Accepts an array of numbers arr, as an argument
// Returns a boolean true, if the array is non-decreasing
// false, otherwise

function checkNonDecreasing(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}
console.log(checkNonDecreasing([1, 2, 3, 6]))

//sample test case
if (checkNonDecreasing([6, 9, 10, 12]) !== true)
    console.log("Test fails: Expected true for input arr = [6, 9, 10, 12]");
else
    console.log("Sample test case for input arr = [6, 9, 10, 12] passed!");