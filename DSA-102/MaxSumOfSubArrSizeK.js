// Problem Description
// Given an array of integers and a number k, find the maximum sum of a subarray of size k.

// Input format
// First line of input contains two integers N and K, where N is the size of the array and K is the subarray size.
// Second line of input contains N integers denoting the array elements.

// Output format
// Print the maximum sum of a subarray of size k.

// Sample Input -->
// 4 2
// 100 200 300 400

// Sample Output -->
// 700

// Explanation
// We get maximum sum by adding subarray {300,400} of size 2.

//optimal approach using static sliding window concept -TC O(n)
function maximumSubarraySumSizeK(N,A,K){
    let maxSum = Number.NEGATIVE_INFINITY;
    let sum=0;
    //find sum of first k elements of the array
    for(let i=0;i<K;i++){
        sum += A[i];
    }
    //initialize maximum sum to the sum of first k integers
    maxSum = sum;
    //sliding window concept-> calculate sum from k to n
    for(let i=K;i<N;i++){
        sum = sum-A[i-K]+A[i]; //calculate sum of each window by excluding the [i-k] element and 
                               // adding the ith element
        maxSum = Math.max(maxSum, sum);  
    }
    return maxSum;
}
console.log(maximumSubarraySumSizeK(4,[100,200,300,400],2));