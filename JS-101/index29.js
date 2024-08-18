// Problem Description
// Implement the function findSmallest() that
// Accepts an array of numbers arr, as an argument
// Returns the smallest number in the array arr

function findSmallest(arr) {
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}
console.log(findSmallest([1, 2, 3, 1, 5]));

//sample test case
if (findSmallest([5, 6, 3, 4]) !== 3)
    console.log("Test fails: Expected 3 for input arr = [5, 6, 3, 4]");
else
    console.log("Sample test case for input arr = [5, 6, 3, 4] passed!");