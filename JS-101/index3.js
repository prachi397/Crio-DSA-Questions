// Problem Description
// Create a function isDescending() that Accepts three number arguments a, b and c
// Returns a boolean true, only if the first number a is greater than the second number b AND 
// the second number b is greater than the third number c else false, otherwise

const isDescending=(a,b,c)=>{
    if(a>b && b>c){
        return true;
    }else{
        return false;
    }
}
//function call
console.log(isDescending(7,6,3));

//sample test case
if (isDescending(7, 6, 3) !== true)
    console.log("Test fails: Expected true for input a = 3, b = 2 and c = 3");
else
    console.log("Sample test cases for input a = 3, b = 2 and c = 1 passed!");
