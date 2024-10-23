let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12,13]
];
//finding number of rows
console.log("number of rows: ",matrix.length);

//finding number of columns
console.log("number of columns: ",matrix[0].length);

//traversing over the matrix
for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix[i].length;j++){
        console.log(matrix[i][j]);
    }
}
