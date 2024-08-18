// Create the function createMatrixII() that
// Accepts a number argument size, representing the number of rows and columns of the matrix (2D array)
// Creates the matrix with the number of rows and columns equal to size
// Fills the rows inside the matrix with values starting from 0
// Returns the matrix (2D array)
// Sample Input --> 2
// Sample Output --> [ [ 0, 1], [ 2, 3] ]

function createMatrixII(n) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
        matrix.push([]);
        for (let j = 0; j < n; j++) {
            matrix[i].push(i * n + j);
        }
    }
    return matrix;
}
console.log(createMatrixII(3));

//sample test case
if (JSON.stringify(createMatrixII(2)) !== JSON.stringify([[0, 1], [2, 3]]))
    console.log("Test fails: Expected [ [ 0, 1 ], [ 2, 3 ] ] for input size = 2");
else
    console.log("Sample test case for input size = 2 passed!");