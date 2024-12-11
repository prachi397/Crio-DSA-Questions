// Problem Description
// Given an array, find a non-empty contiguous subarray with the largest sum.

// Sample Input -->
// 8
// -2 -3 4 -1 -2 1 5 -3

// Sample Output -->
// 7

// Explanation -->
// The subarray [4 -1 -2 1 5] has sum 7, which is the maximum possible.

//Kadane's algorithm
function contigiousSequence(n, arr){
    let sum = 0, max = Number.NEGATIVE_INFINITY;
    //loop through the array
    for(let i=0;i<n;i++){
        //calculate sum
        sum = sum + arr[i];
        //compare the max and sum
        max = Math.max(max,sum);
        //if sum became negative then make it zero
        if(sum<0){
            sum=0;
        }
    }
    return max;
}
console.log(contigiousSequence(8,[-2,-3,4,-1,-2,1,5,-3]));