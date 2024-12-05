// Problem Description
// Given an array of numbers, find GCD of the array elements.
// The greatest common divisor of two numbers is the largest positive integer that evenly 
// divides both numbers.

// Sample Input --->
// 4
// 4 6 8 16

// Sample Output --->
// 2

//helper function to find gcd of two numbers
function findGcd(a,b){
    //if the second number is 0 then gcd will be first number
    if(b===0){
        return a;
    }
    return findGcd(b,a%b);
}

function gcdOfArray(n,arr){
    let gcd = 0;
    for(let i=0;i<n;i++){
        gcd = findGcd(gcd,arr[i]);
    }
    return gcd;
}
console.log(gcdOfArray(4,[4,6,8,16]));