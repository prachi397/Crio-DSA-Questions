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

//otpimal approach -> TC & SC -> O(n)
function subarraySumZeroOptimal(n, arr){
    //create a set data structure to store the sum
    let prefix = new Set();
    let sum=0;
    //loop through the array
    for(let i=0;i<n;i++){
        //calculate current sum
        sum+=arr[i];
        //if we found sumas zero or elese out set already has the sum
        if(sum===0 || prefix.has(sum)){
            return "Yes";
        }
        //if sum is not present in set then add it
        else{
            prefix.add(sum);
        }
    }
    return "No";
}
console.log(subarraySumZeroOptimal(4,[4,2,-2,5]))