// Problem Description
// Given two sorted arrays of size M and N, merge the two arrays and return the final array, sorted.

// Sample Input --->
// 3
// 3
// 1 2 3
// 2 5 6

// Sample Output --->
// 1 2 2 3 5 6

//brute force approach --> here space complexity will be O(n+m) as we are creating extra space 
function mergeSortedArrayBrute(m, nums1, n, nums2) {
    //concatenate both the array
    let mergedArr = [...nums1,...nums2]; //tc- O(n+m)
    //return the sorted merged array
    return mergedArr.sort((a,b)=>a-b); //tc - O((n+m)log(n+m))
}
console.log(mergeSortedArrayBrute(3,[1,2,3],3,[2,5,6]));
