// Problem Description
// Create a function firstEven() that
// Accepts an array of numbers arr as the argument
// Returns the first even number in the array, if present
// Else, undefined

function firstEven(arr){
    return arr.find((ele)=> ele%2 === 0);
}
console.log(firstEven([1, 2, 3, 4]));