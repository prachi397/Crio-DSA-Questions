// Problem Description
// Sam is a very optimistic person. He dislikes anything that is incorrect(false) in nature.
// Implement a function removeFalsyValues() that:
// Accepts an array argument arr
// Return a new array after removing all the falsy values from arr

function removeFalsyValues(arr) {
    let result = [];
    let falsyArr = ['', false, undefined, NaN, null, 0];
    for (let i = 0; i < arr.length; i++) {
        if (!falsyArr.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(removeFalsyValues([7, 'ate', "", false, 9]));

//sample test case
if (removeFalsyValues([1, 2, 3]).toString() !== [1, 2, 3].toString())
    console.log("Test fails: Expected [1, 2, 3] for input arr = [1, 2, 3]");
else
    console.log("Sample test case for input arr = [1, 2, 3] passed!");