// Problem Description
// You are given a positive integer 'N' and you are required to implement a recursive function that
// calculates the sum of the first 'N' natural numbers.

// Sample Input --->
// 10

// Sample Output --->
// 55

function naturalSum(n) {
  if (n === 0) {
    return 0;
  }
  return n + naturalSum(n - 1);
}
console.log(naturalSum(10));
