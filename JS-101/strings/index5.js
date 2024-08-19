// Problem Description
// Create a new function mergedString() that
// Accepts an array of strings str as an argument
// Returns a string created by merging the first three elements of the array str

function mergedString(arr){
    const [a,b,c] = arr;
    return `${a} ${b} ${c}`;
}
console.log(mergedString(["code", "for", "good", "vibes", "only"]))