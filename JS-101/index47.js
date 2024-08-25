// Problem Description
// Implement the function remove() that
// Accepts three arguments, an array of strings fruits, a number startIndex, and a number
// deleteCount
// Removes the elements starting from startIndex till the number of elements to be removed 
// is equal to deleteCount
// Returns no value/array as the original array gets modified.

function remove(fruits,startIndex,deleteCount){
    return fruits.splice(startIndex,deleteCount);
}
console.log(remove(["Banana", "Orange", "Apple", "Mango", "Kiwi"], 2, 2));