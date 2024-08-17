// Problem Description
// Implement the function sumOfTwoNumbers() that
// Accepts two number arguments a and b.
// Return a number that is the sum of the input two numbers a and b

const sumOfTwoNumbers=(a,b)=>{
    return a+b;
}

console.log(sumOfTwoNumbers(5,5));

//sample test case
if(sumOfTwoNumbers(5,5)!== 10){
    console.log('Test Failed! for input a = 5 and b = 5 expected sum is 10');
}else{
    console.log('Test Passed! for input a = 5 and b = 5');
}