// Problem Description
// Implement the function sumTwoArrays() that
// Accepts two array arguments arr1 and arr2
// Returns a number that is the total sum of of all the elements in both the arrays

function sumTwoArrays(arr1, arr2) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        sum += arr2[i];
    }
    return sum;
}
console.log(sumTwoArrays([1, 2, 3], [4, 5, 6]));

//sample test case
if (sumTwoArrays([2, 3], [1, 2, 3]) !== 11)
    console.log("Test fails: Expected 11 for input arr1 = [2, 3] and arr2 = [1, 2, 3]");
else
    console.log("Sample test case for input arr1 = [2, 3] and arr2 = [1, 2, 3] passed!");