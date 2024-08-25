// Problem Description
// Implement the function multiplyThree() that
// Accepts an array of numbers arr as an argument
// Returns a new array wherein all its elements are multiplied by 3 of the given array arr

function multiplyThree(arr) {
    let newArr = arr.map((ele) => ele * 3);
    return newArr;
}
console.log(multiplyThree([1, 2, 3, 4]));

//sample test case
if (JSON.stringify(multiplyThree([1, 2, 3])) !== JSON.stringify([3, 6, 9]))
    console.log("Test fails: Expected [3, 6, 9] for input arr = [1, 2, 3]");
else
    console.log("Sample test case for input arr = [1, 2, 3] passed!");