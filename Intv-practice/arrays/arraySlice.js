// The sclice() method returns the selected elements of the array as a new array. It selects the element 
// from the given start argument till the given optinal end argument without including the last element.
// If we do not provide end argument then it will return the array from start argument to the end of the array.
// Note: it will not modify the original array.

let arr = [1,2,3,4,5,6];
console.log(arr.slice(2,4));
console.log(arr.slice(2,3));
console.log(arr.slice(5));
console.log(arr.slice(-4,-2));
console.log(arr);