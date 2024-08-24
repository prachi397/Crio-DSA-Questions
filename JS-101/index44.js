// Problem Description
// Implement the function sortNumerically() that
// Accepts an array of numbers arr as an argument
// Sorts the array in ascending order

function sortNumerically(arr){
    return arr.sort((a,b)=>a-b);
}
console.log(sortNumerically([2, 3, 1, 4]));