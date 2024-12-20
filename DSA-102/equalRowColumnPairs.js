// Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri 
// and column cj are equal.
// A row and column pair is considered equal if they contain the same elements in the same order 
// (i.e., an equal array).

// Example 1:
// Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
// Output: 1
// Explanation: There is 1 equal row and column pair:
// - (Row 2, Column 1): [2,7,7]
// Example 2:
// Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
// Output: 3
// Explanation: There are 3 equal row and column pairs:
// - (Row 0, Column 0): [3,1,2,2]
// - (Row 2, Column 2): [2,4,2,2]
// - (Row 3, Column 2): [2,4,2,2]

function equalPairs(grid){
    let n= grid.length;
    let rowMap = new Map();
    let count = 0;
    // Step 1: Store all rows in a map with their frequencies
    //loop till n
    for(let i=0;i<n;i++){
        //get the row and join them using ,
        let row = grid[i].join(',');
        //now add the row with their frequency in rowMap
        if(rowMap.has(row)){
            rowMap.set(row,rowMap.get(row)+1);
        }else{
            rowMap.set(row,1);
        }
    }

    // Step 2: Compare each column with the rows in the map
    for(let j=0;j<n;j++){
        let column = [];
        for(let i=0;i<n;i++){
            column.push(grid[i][j]);
        }
        //convert columns into string
        let colStr = column.join(',');
        //check if the column is present in the rowMap
        if(rowMap.has(colStr)){
            //add the frequency of that particular column
            count += rowMap.get(colStr);
        }
    }
   return count;
}
console.log(equalPairs([[3,2,1],[1,7,6],[2,7,7]]))

//tc and sc - O(n*n)