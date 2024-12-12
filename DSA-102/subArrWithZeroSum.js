// Problem Description
// Given an array of positive and negative numbers, you need to find if there is any subarray with 0 sum.
// Note: A subarray of an array is a set of contiguous elements having a size of at least 1.

// Sample Input --->
// 2
// 4
// 4 2 -2 5
// 3
// 3 2 -1

// Sample Output --->
// Yes
// No

// Explanation --->
// For the first test case {2,-2} will be the subset that sums to 0.
// For the second test case, there is no such subarray that can sum to 0.

//brute force approach -> TC- O(n*n)
function subarraySumZero(n, arr){
    for(let i=0;i<n;i++){
        let sum = 0;
       for(let j=i;j<n;j++){
        sum+=arr[j];
        if(sum === 0){
            return "Yes";
        }
       }
    }
    return "NO"
}
console.log(subarraySumZero(4,[4,2,-2,5]))