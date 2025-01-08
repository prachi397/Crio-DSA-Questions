// Given a non-negative integer(without leading zeroes) represented as an array arr.
// Your task is to add 1 to the number (increment the number by 1). The digits are stored such that
// the most significant digit is at the starting index of the array.

// Examples:
// Input: arr[] = [5, 6, 7, 8]
// Output: [5, 6, 7, 9]
// Explanation: 5678 + 1 = 5679

function addOne(arr) {
  let num = parseInt(arr.join(""));
  num += 1;
  for(let i=0;i<num.length;i++){
    arr[i] = num[i];
  }
  return arr;
}
console.log(addOne([5, 6, 7, 8]));
