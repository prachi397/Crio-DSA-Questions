// Problem Description
// Given an array containing a mix of strings and numbers, such as [a, 1, b, 2, c, d, 3, 4, e], 
// your task is to create a new array that retains only the numbers present in the original array.
// For example, from the provided array, the output array should contain [1, 2, 3, 4]. The numbers in 
// the original array can be single or multiple digits, and there may be strings interspersed among them.
// Note: The numbers in the array are also of string type.

function extractNum(arr){
    let result = [];
    for(let i=0;i<arr.length;i++){
        if(!isNaN(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(extractNum(['a', 1, 'b', 2, 'c', 'd', 3, 4, 'e']));