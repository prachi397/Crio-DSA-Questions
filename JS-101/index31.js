// Problem Description
// If a number is multiplied by itself three times, then the product is called the cube of that number.
// For example, The cube of 2 is 2 * 2 *2 = 8.
// Implement the function evenCubeSum() that
// Accepts an array of numbers arr, as an argument
// Returns a number that is the sum of cubes of all the even numbers in the array arr

function evenCubeSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i] ** 3;
        }
    }
    return sum;
}
console.log(evenCubeSum([1, 2, 3, 4]));

//sample test case
if (evenCubeSum([1, 2, 3, 4]) !== 72)
    console.log("Test fails: Expected 72 for input arr = [1, 2, 3, 4]");
else
    console.log("Sample test case for input arr = [1, 2, 3, 4] passed!");