// Problem Description
// Implement the function matrixSum() that Accepts a 2D array of numbers arr as an argument
// Returns the sum of all the elements of the matrix(2D array)
// Sample Input --> [[23,48],[12,18]]
// Sample Output --> 101

function matrixSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            sum += arr[i][j];
        }
    }
    return sum;
}
console.log(matrixSum([[23, 48], [12, 18]]));

//sample test case
if (matrixSum([[5, 1], [2, 4]]) != 12)
    console.log("Test fails: Expected 12 for input arr = [[5, 1], [2, 4]]");
else
    console.log("Sample test case for input arr = [[5, 1], [2, 4]] passed!");