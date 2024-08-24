// Problem Description
// Implement the function halfValues() that Accepts an array of numbers arr as an argument
// Returns a new array after dividing every element in the given array arr by index + 1 and 
// storing the value in the new array.

function halfValues(arr){
    let newArr = [];
    arr.forEach((ele,index)=>{
       newArr.push(ele/(index+1));
    })
    return newArr;
}
console.log(halfValues([2, 3, 4]));

//sample test case
if (halfValues([2, 3, 4]).toString() != [2, 1.5, 1.3333333333333333].toString())
    console.log("Test fails: Expected [ 2, 1.5, 1.3333333333333333 ] for input arr = [2, 3, 4] ");
  else
    console.log("Sample test case for input arr = [2, 3, 4] passed!");