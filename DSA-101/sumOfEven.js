// Problem Description
// You are required to implement a recursive function that calculates the sum of even numbers from 1 
// to a given positive integer n.

// Sample Input --->
// 10

// Sample Output --->
// 30

// Explanation --->
// The even numbers from 1 to 10 are 2, 4, 6, 8, and 10. The sum is 2+4+6+8+10 = 30.

function sumOfEvenNumbersDSAMOCK(n){
    //if n is 0 then simply sum will be 0
    if(n<=0){
        return 0;
    }
    //if n is even 
    if(n%2 === 0){
        //then sum of n + n-2 i.e, 10+8+6+...
        return n+sumOfEvenNumbersDSAMOCK(n-2);
    }else{
        //if n is odd then let say n is 5 then 4+2+0
        return sumOfEvenNumbersDSAMOCK(n-1);
    }
}

console.log(sumOfEvenNumbersDSAMOCK(7));