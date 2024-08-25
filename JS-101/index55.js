// Problem Description
// Implement the function removeDeduplicate() that
// Accepts an array of numbers arr as an argument
// Return an array after removing the duplicates from the input array arr, 
// while maintaining the original order of elements.

function removeDeduplicate(arr){
    return arr.filter((ele,index)=>arr.indexOf(ele)===index);
}

console.log(removeDeduplicate([1,2,2,3,4,4,5,5]));