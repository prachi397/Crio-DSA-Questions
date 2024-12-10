//The splice() method  adds/removes the elements from an array and return the removed items within an array.
//the first argument specifies the array index for insertion/deletion, and the optinal second argument
//specifies the number of elements to be deleted and the rest of the arguments will be elements to inserted
//in the array.
// Note: it will not modify the original array.
let arr1 = [1,2,3,4,5,6];
console.log(arr1.splice(0,2));
let arr2 = [1,2,3,4,5,6];
console.log(arr2.slice(3));
let arr3 = [1,2,3,4,5,6];
console.log(arr3.splice(3,1,"a","b","c"));
console.log(arr3);