// Problem Description
// Given an integer n, you have to find the nth fibonacci number. The fibonacci sequence is given by 
// 0,1,1,2,3,5,8,... where 0 and 1 are the 0th and 1st fibonacci numbers respectively and every consecutive 
// number is the sum of the previous two numbers in the sequence.
// Input format
// There is one line of input, containing an integer n.
// Output format
// Print the nth fibonacci number.
// Sample Input --->
// 3
// Sample Output --->
// 2

function nthFibonacci(n){
    if(n<=1){
        return n;
    }
    return nthFibonacci(n-1)+nthFibonacci(n-2);
}
console.log(nthFibonacci(6));