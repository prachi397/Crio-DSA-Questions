// Problem Description
// Implement the function divide() that Accepts two number arguments num and den
// Returns a number 0, if both num and den are 0, because 0/0 is not a number (NaN)
// That is the result of dividing num by den

function divide(num,den){
    if(num === 0 && den === 0){
        return 0;
    }
    return num/den;
}
console.log(divide(3,6));

//sample test case
if (divide(1, 4) !== 0.25)
    console.log("Test fails: Expected 0.25 for input num = 1 and den = 4");
else
    console.log("Sample test case for input num = 1 and den = 4 passed!");