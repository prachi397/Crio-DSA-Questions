// Problem Description
// You are given a list of n integers, and your task is to calculate the number of distinct values in the list.

// Sample Input --->
// 5
// 2 3 2 2 3

// Sample Output --->
// 2

// Explanation --->
// There are two distinct values in the list which are 2 and 3.

function distinctNumbersBasic(n,nums){
    //declare a set
    let s = new Set();
    for(let i=0;i<n;i++){
        s.add(nums[i]);
    }
    return s.size;
}
let nums = [2,3,2,2,3];
console.log(distinctNumbersBasic(5,nums));
