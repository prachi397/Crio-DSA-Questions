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
// console.log(mergeSortedArrayBrute(3,[1,2,3],3,[2,5,6]));

//optimal solution --> using two pointer approach
function mergeSortedArray(m, nums1, n, nums2){
    let result=[];
    //initialize pointers at starting of both arrays
    let p1=0, p2=0;
    //loop until one the condition is not became false
    while(p1<m && p2<n){
        //comapare both the simultaneous elements of array and push the smaller one in result
        if(nums1[p1]<=nums2[p2]){
            result.push(nums1[p1]);
            p1++;
        }else{
            result.push(nums2[p2]);
            p2++;
        }
    }
    //for remain array
    while(p1<m){
        result.push(nums1[p1]);
        p1++;
    }
    while(p2<n){
        result.push(nums2[p2]);
        p2++;
    }
    return result;
}
console.log(mergeSortedArray(3,[1,2,3],3,[2,5,6]));
 //here time complexity is O(n+m) and space complexity is O(n+m)
