// Problem Description
// Given a number n, you have to calculate the factorial of that number.
// Input format
// First line contains an integer - n
// Output format
// Print the factorial of the given number.
// Sample Input --->
// 3
// Sample Output --->
// 6

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(3));
