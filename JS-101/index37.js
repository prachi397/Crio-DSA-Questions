// Problem Description
// Create a function maxMinDifference() that Accepts an array of numbers arr as an argument
// Returns a number representing the difference between the maximum and minimum elements 
// within the array.

function maxMinDifference(arr){
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return max-min;
}
console.log(maxMinDifference([7, 3, 8, 4]));