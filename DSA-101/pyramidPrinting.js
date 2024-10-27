// Problem Description
// Given a number n, you have to print a triangle-shaped pattern with n rows using *. 
// The starting row will have one * and will increment by one for each row after it 
// ( two *s in the second row, three *s in the third row, and so on till the nth row).
// Input format
// First line contains an integer n - Number of rows.
// Output format
// Return an array of strings with each element in the array representing a row of the pattern.

// Sample Input -->
// 4

// Sample Output -->
// *
// * *
// * * *
// * * * *

function printPyramid(n){
    let result = [];
    for(let i=0;i<n;i++){
        let row='';
        for(let j=0;j<=i;j++){
            row += "* ";
        }
        result.push(row.trim());
    }
    return result.forEach((val)=>{
        console.log(val);
    });
}
printPyramid(4);