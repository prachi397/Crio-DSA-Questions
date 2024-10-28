// Problem Description
// In Tribonacci sequence, the nth term Tn, is defined as follows:
// T0 = 0,
// T1 = 1,
// T2 = 1,
// and Tn = Tn-1 + Tn-2 + Tn-3 , for n >= 3.
// Overall the sequence looks like this - 0, 1, 1, 2, 4, 7, 13, 24, 44, 81 …
// Given n, return the value of Tn.
// Input format
// A single line containing an Integer, N.
// Output format
// The Nth integer in the tribonacci sequence.
// Sample Input --->
// 4
// Sample Output --->
// 4
// Explanation --->
// T3 = T2 + T1 + T0 = 1 + 1 + 0 = 2
// T4 = T3 + T2 + T1 = 2 + 1 + 1 = 4

function tribonacciNum(n){
    if(n<=1){
        return n;
    }
    if(n===2){
        return 1;
    }
    return tribonacciNum(n-1)+tribonacciNum(n-2)+tribonacciNum(n-3);
}
console.log(tribonacciNum(4));