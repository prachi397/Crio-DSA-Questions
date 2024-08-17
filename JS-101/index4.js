// Problem Description
// Even numbers are numbers that are exactly divisible by 2, whereas an odd number cannot be exactly 
// divided by 2.
// Create a function evenOrOdd() that Accepts a number argument num
// Returns a string "Even", if the input number num is even
// "Odd", if the input number num is odd

const evenOrOdd=(num)=>{
    if(num%2 === 0){
        return 'Even';
    }else{
        return 'Odd';
    }
}
console.log(evenOrOdd(6));
if(evenOrOdd(6) !== 'Even'){
    console.log('Test Failed. Expected Even for input 6');
}else{
    console.log('Test Passed for input 6');
}