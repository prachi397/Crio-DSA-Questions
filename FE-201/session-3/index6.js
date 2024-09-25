// Problem Description
// You are given two arrays original and attach as arguments. Use the concat method in the 
// nonMutatingConcat function to concatenate attach to the end of the original. 
// The function should return the concatenated array.
// Sample Input ---->
// [1,2,3], [4,5]
// Sample Output ---->
// [1,2,3,4,5]

function nonMutatingConcat(original, attach) {
    let newArr = original.concat(attach);
    return newArr;
}

const ans = nonMutatingConcat([1, 2, 3], [4, 5]);
const y = [1, 2, 3, 4, 5];
if (JSON.stringify(ans) === JSON.stringify(y))
    console.log(
        "Sample test case for original = [1,2,3] and attach = [4,5] passed!"
    );
else
    console.log(
        "Test fails: Expected [ 1, 2, 3, 4, 5 ] for original = [1,2,3] and attach = [4,5]"
    );