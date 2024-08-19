// Problem Description
// Implement the function generateCombinations() that Accepts two array of strings arr1 and arr2, 
// as an argument, Returns a new array of strings that concatenates each element from the first 
// array with each of the element from the second array
// Sample Input --> ["a", "c", "e"], ["b", "d", "f"]
// Sample Output --> ["ab", "ad", "af", "cb", "cd", "cf", "eb", "ed", "ef"]

function generateCombinations(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            result.push(arr1[i] + arr2[j]);
        }
    }
    return result;
}
console.log(generateCombinations(["a", "c", "e"], ["b", "d", "f"]));

//sample test case
if (JSON.stringify(generateCombinations(['a', 'c', 'e'], ['b', 'd', 'f'])) !== JSON.stringify(['ab', 'ad', 'af', 'cb', 'cd', 'cf', 'eb', 'ed', 'ef']))
    console.log("Test fails: Expected ['ab', 'ad', 'af', 'cb', 'cd', 'cf', 'eb', 'ed', 'ef'] for input arr1 = ['a', 'c', 'e'] and arr2 = ['b', 'd', 'f']");
else
    console.log("Sample test case for input arr1 = ['a', 'c', 'e'] and arr2 = ['b', 'd', 'f'] passed!");