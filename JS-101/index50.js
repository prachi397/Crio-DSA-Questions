// Problem Description
// Create a function sum() that
// Accepts an array of numbers arr as an argument
// Utilizes the .reduce() method to calculate the sum of the elements in the array.
// Returns the sum

function sum(arr){
   return arr.reduce((total,ele)=>total+ele,0);
}
console.log(sum([1, 2, 3, 4]));