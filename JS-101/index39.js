// Problem Description
// Implement the function replaceElement() that Accepts three arguments, an array of numbers arr, 
// a number index, and a number ele
// Updates the number at the given index of the array to the given number ele, only if the index 
// is less than the length of the array
// else, Insert the element at the end of the array

// Note
// We don't need to return anything. Remember, how changes made to an array that's passed as an 
// argument also affect the original array? Think about this.
// Hints
// Objects and Arrays are passed by reference, meaning if any changes are made in the passed Object / Array 
// those will be reflected in the original Object / Array.

function replaceElement(arr, index, ele) {
    if (index < arr.length) {
        arr[index] = ele;
    } else {
        arr.push(ele);
    }
}
let arr = [7, 3, 8, 4]
replaceElement(arr, 2, 7);
console.log(arr);

//sample test case
if (replaceElement([9, 1, 3, 4], 2, 7) && arr != [9, 1, 7, 4])
    console.log("Test fails: Expected [9, 1, 7, 4] for input arr = [9, 1, 3, 4], index = 2 and ele = 7");
else
    console.log("Sample test case for input arr = [9, 1, 3, 4], index = 2 and ele = 7 passed!");