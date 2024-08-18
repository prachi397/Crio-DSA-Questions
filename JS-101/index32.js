// Problem Description
// Create the function createMatrix() that
// Accepts a number argument size, representing the number of rows and columns of the matrix (2D array)
// Creates the matrix with the number of rows and columns equal to size
// Fills each of the rows inside the matrix with values from 0 to size-1
// Returns the matrix (2D array)

function createMatrix(n) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
        matrix.push([]);
        for (let j = 0; j < n; j++) {
            matrix[i].push(j);
        }
    }
    return matrix;
}
console.log(createMatrix(4));

//sample test case
if (JSON.stringify(createMatrix(2)) !== JSON.stringify([[0, 1], [0, 1],]))
    console.log("Test fails: Expected [ [ 0, 1 ], [ 0, 1 ] ] for input size = 2");
else
    console.log("Sample test case for input size = 2 passed!");