// Problem Description
// Implement the function createPhoneNumber() that Accepts an array of numbers as argument arr, 
// consisting of 10 elements
// Return a concatenated string of all the numbers from the array arr

function createPhoneNumber(arr) {
    let phoneNum = '';
    for (let i = 0; i < arr.length; i++) {
        phoneNum += arr[i];
    }
    return phoneNum;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

//sample test case
if (createPhoneNumber([9, 8, 7, 4, 5, 6, 3, 2, 1, 0]) !== "9874563210")
    console.log("Test fails: Expected '9874563210' for input arr = [9, 8, 7, 4, 5, 6, 3, 2, 1, 0]");
else
    console.log("Sample test case for input arr = [9, 8, 7, 4, 5, 6, 3, 2, 1, 0] passed!");