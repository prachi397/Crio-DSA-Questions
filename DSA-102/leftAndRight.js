// Problem Description
// In a land of integers, a challenge arises. You have an array, and you must create another array of the 
// same length. Each element in this new array depends on the difference between the sum of elements to 
// its left and the sum of elements to its right. If there are no elements to the left or right, consider 
// it as 0. Solve the challenge and return the new array as your answer.

// Note: answer.length == nums.length.
// answer[i] = |leftSum[i] - rightSum[i]|.

// Sample Input --->
// 5
// 1 2 3 4 10

// Sample Output --->
// 19 16 11 4 10

// Explanation --->
// For each element in the array, we calculate the difference between the sum of elements to its left and 
// the sum of elements to its right:
// For the first element 1, we have | 0 - 19 | = 19.
// For the second element 2, we have | 1 - 17 | = 16.
// For the third element 3, we have | 3 - 14 | = 11.
// For the fourth element 4, we have | 6 - 10 | = 4.
// For the fifth element 10, we have | 10 - 0 | = 10.
// The resulting output array is [19, 16, 11, 4, 10].

function leftAndRight(n,nums){
    let result = [];
    let leftSum = [], rightSum=[];
    //calculate left sum -> prefix sum
     //left sum at 0th index will be element itself at 0th index
     leftSum[0] = nums[0];
    for(let i=1;i<n;i++){
        leftSum[i] = leftSum[i-1]+nums[i];
    }
    //calculate right sum -> suffix sum
    //right sum at last index with be the element at the ast index itself
    rightSum[n-1] = nums[n-1];
    for(let i=n-2;i>=0;i--){
        rightSum[i] = rightSum[i+1] + nums[i];
    }
    //loop through the array
    for(let i=0;i<n;i++){
        let left = 0, right = 0;
        //if it is the first element then there is no left element so leftsum will be 0 in that case
        //if i is greater than 0
        if(i>0){
            left = leftSum[i-1];
        }
        //if i is the last element then there is no right sum so right sum will be 0 in that case
        //if i is less than n-1
        if(i<n-1){
            right = rightSum[i+1];
        }
        //push the result left-right  in the result arr;
        result.push(Math.abs(left-right));
    }
    //return the result
    return result;
}
console.log(leftAndRight(5,[1,2,3,4,10]));