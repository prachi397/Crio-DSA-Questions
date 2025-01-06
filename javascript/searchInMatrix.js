// Problem Description
// Given a sorted matrix, come up with an efficient way to search for a value in the matrix. Each row in the
// matrix is sorted in ascending order from left to right. Each column in the matrix is sorted in ascending
// order from top to bottom.
// Input format
// The first line contains two space-separated integers N and M denoting the number of rows and columns
// respectively.
// Next N lines contain M space-separated integers denoting the elements of the matrix A.
// Next line contains the number of queries, Q
// Next Q lines follow, each line contains the target element K which needs to be searched.

// Output format
// Print True if the target element is present in the matrix else print False.

// Constraints
// 0 <= N, M <= 10^3
// 0 <= A(i,j) <= 10^9
// 0 <= Q <= 10^5
// 0 <= K <= 10^9

// Sample Input 1

// 5 5
// 1 4 7 11 15
// 2 5 8 12 19
// 3 6 9 16 22
// 10 13 14 17 24
// 18 21 23 26 30
// 1
// 3

// Sample Output 1
// true

// Explanation 1
// The number 3 is present in the matrix.
function searchA2DMatrix(matrix, target) {
    //base case: if we have empty matrix
    if(matrix.length === 0){
        return false;
    }
    let n = matrix.length, m = matrix[0].length;
    let i=0, j=m-1;
    //iterate till entire row and columns
    while(i<n && j>=0){
        //if found target then return true
        if(matrix[i][j] === target){
            return true;
        }else if(matrix[i][j]>target){
            j--;
        }else{
            i++;
        }
    }
    return false;
}
let matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];
console.log(searchA2DMatrix(matrix,3));
