// Problem Description
// Given a matrix of dimension nxn having elements 1 to nxn distinct elements. 
// Check whether the matrix is magic square or not.
// Magic square is a square that has the same sum of rows, columns and diagonals.
// Input format
// First line contains integer n.
// In next n lines each line contains n elements.
// Output format
// Print "Yes" if it is a magic square , "No" otherwise.

// Sample Input -->
// 3

// 4 9 2
// 3 5 7
// 8 1 6

// Sample Output -->
// Yes

function checkMagicSquare(n,matrix){
    //first calculate sum of any row or column
    let sum=0;
    for(let i=0;i<n;i++){
        sum+=matrix[0][i];
    }

    //calculate the row, column and diagonals sum
    let d1Sum=0, d2Sum=0;
    for(let i=0;i<n;i++){
        let rowSum = 0, colSum = 0;
        for(let j=0;j<n;j++){

            //calculate row sum
            rowSum += matrix[i][j];

            //calculate column sum
            colSum += matrix[j][i];

            //calculate left diagonal sum
            if(i==j){
                d1Sum += matrix[i][j];
            }

            //calculate right diagonal sum
            if(i+j == n-1){
                d2Sum += matrix[i][j];
            }
        } 
        //check if rows or columns sum is equal to the calculated sum or not
        if(rowSum !== sum || colSum !== sum){
            return false;
        }
    }
    //check if diagonal sum is equal to the calculated sum or not
    if(d1Sum !== sum || d2Sum !== sum){
        return false;
    }
    return true;
}

let arr = [[4,9,2],[3,5,7],[8,1,6]];
console.log(checkMagicSquare(3,arr));