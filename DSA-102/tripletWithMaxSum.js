// Problem Description
// Given an array nums, you need to find the maximum sum of triplet (nums[i] + nums[j] + nums[k]) 
// such that 0 <= i < j < k and nums[i] < nums[j] < nums[k]. If no such triplet exists print 0.

// Sample Input --->
// 3
// 7
// 3 7 4 2 5 7 5
// 4
// 5 2 4 5
// 3
// 3 2 1

// Sample Output --->
// 16
// 11
// 0

// Explanation --->
// In the first case valid triplets are: [3,4,5], [3,4,7], [4,5,7], [2,5,7]. Out of these [4,5,7] 
// has the maximum sum, 16. In the second case, it’s [2, 4, 5] with sum 11.
// In the third case there are no valid triplets.

function maxSumTriplet(n, arr){
    let maxSum = 0;
    //find j by iterate over the array from 0 to n-1
    for(let j=0;j<n-1;j++){  //TC - O(n)
        //find i which is less than j and greater than amoung all the leftmost elements of j
        let leftMax = Number.NEGATIVE_INFINITY;
        //iterate through 0 to j-1
        for(let i=0;i<=j-1;i++){  //TC - O(j)
           //check the element whihc is less than arr[j];
           if(arr[i]<arr[j]){
            leftMax = Math.max(leftMax,arr[i]);
           }
        }
        //find k which is greater than j and greater than amount all the rightmost element of j
        let rightMax = Number.NEGATIVE_INFINITY;
        //iterate through j+1 to n-1
        for(let k=j+1;k<=n-1;k++){ //TC - O(n-1-j) - O(n-j)
            //check element greater than arr[j]
            if(arr[k]>arr[j]){
                rightMax = Math.max(rightMax,arr[k]);
            }
        }
        //find the maximum triplet sum amoung all
        maxSum = Math.max(maxSum,leftMax+arr[j]+rightMax);
    }
    return maxSum;
}
console.log(maxSumTriplet(3,[3,2,1]));
console.log(maxSumTriplet(7,[3,7,4,2,5,7,5]));

//here total TC - O(n*(j+n-j)) - O(n*n) and SC - O(1)