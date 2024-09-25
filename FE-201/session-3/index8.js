// Problem Description
// Write a JavaScript function called nonMutatingSort that takes an array arr as its argument and 
// returns a new array with its elements sorted in ascending order, without changing the order 
// of the original array.
// Sample Input --->
// [5,3,4,1,2]
// Sample Output 1 --->
// [1,2,3,4,5]

function nonMutatingSort(arr) {
    // You only need to implement this function.
    let newArr = [...arr];
    return newArr.sort((a, b) => a - b);
}

const arr = [5, 6, 3, 2, 9];
var res = nonMutatingSort(arr);

if (
    JSON.stringify(res) == JSON.stringify([2, 3, 5, 6, 9]) &&
    JSON.stringify(arr) == JSON.stringify([5, 6, 3, 2, 9])
)
    console.log("Sample test case for input arr = [5,6,3,2,9] passed!");
else
    console.log("Test fails: Expected [2,3,5,6,9] for input arr = [5,6,3,2,9] ");