// Problem Description
// Create a function isEqual() that Accepts two number arguments a and b, Return a boolean true, 
// if both the input numbers a and b are equal false, otherwise

// Sample Input 1
// 89, 11

// Sample Output 1
// false

// Explanation
// 89 is not equal to 11, so return false.

function isEqual(a,b){
    if(a===b){
        return true;
    }else{
        return false;
    }
}
//function call
// console.log(isEqual(-1,-4));

//test case
if(isEqual(5,5) !== true){
    console.log('Test Failed! Expected true for input a = 5 and b = 5');
}
else{
    console.log('Sample test case for input a = 5 and b = 5 passed!');
}