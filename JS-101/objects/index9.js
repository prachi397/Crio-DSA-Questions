// Problem Description
// Implement the function replaceElement() that Accepts three arguments, an array of numbers arr, 
// a number index, and a number ele
// Updates the number at the given index of the array to the given number ele, only if the index is less 
// than the length of the array 
// else, Insert the element at the end of the array

// Hints
// Objects and Arrays are passed by reference, meaning if any changes are made in the passed 
// Object / Array those will be reflected in the original Object / Array.
// Sample Input --> [7, 3, 8, 4], 2, 7
// Sample Output --> [7, 3, 7, 4]

function replaceElement(arr,index,ele){
    if(index < arr.length){
        arr[index] = ele;
    }else{
        arr.push(ele);
    }
    return arr;
}
console.log(replaceElement([7, 3, 8, 4], 2, 7));

//sample test case
var arr = [9, 1, 7, 4];
if (replaceElement([9, 1, 3, 4], 2, 7) && arr != [9, 1, 7, 4])
    console.log("Test fails: Expected [9, 1, 7, 4] for input arr = [9, 1, 3, 4], index = 2 and ele = 7");
else
    console.log("Sample test case for input arr = [9, 1, 3, 4], index = 2 and ele = 7 passed!");