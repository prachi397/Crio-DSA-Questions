// Problem Description
// Implement the function search() that
// Accepts two arguments an array of numbers arr and number key
// Returns a boolean true, if the key is present in the given array arr
// false, otherwise

function search(arr,key){
    let found = false;
    arr.forEach((ele)=>{
        if(ele === key){
            found =  true;
        }
    })
    return found;
}
console.log(search([1, 2, 3, 4], 2));

//sample test case
if (search([1, 2, 3, 2, 3, 2], 0) != false)
    console.log("Test fails: Expected false for input arr = [1, 2, 3, 2, 3, 2], and key = 0 ");
  else
    console.log("Sample test case for input arr = [1, 2, 3, 2, 3, 2], and key = 0  passed!");