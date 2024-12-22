// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i]
// is the number of 1's in the binary representation of i.

// Example 1:
// Input: n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// Example 2:
// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101

function countBits(n) {
    //taking result array with n+1 size
  let result = new Array(n + 1).fill(0);
  //iterate from 0 till n
  for (let i = 0; i <= n; i++) {
    //i>>1 means right shift 1 by 1 + (i&1)-> checks whether the lease significant bit is 0 or 1, 
    //it returns 1 if i is odd and 0 if i is even
    result[i] = result[i >> 1] + (i & 1);
  }
  return result;
}
console.log(countBits(5));
