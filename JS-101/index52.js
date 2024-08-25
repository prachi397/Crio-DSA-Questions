// Problem Description
// Create a function remove() that
// Accepts three arguments an array of strings names, a number startIndex, and a number deleteCount.
// Removes the elements starting from startIndex till the number of elements to be removed is 
// equal to deleteCount
// Returns the removed elements in the form of an array.

function remove(names,startIndex,deleteCount){
    return names.splice(startIndex,deleteCount);
}
console.log(remove(["Ravi", "Faizan", "Kiran", "Shashwat", "Pulkit"], 2, 2));