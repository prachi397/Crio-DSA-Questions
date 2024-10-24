// Problem Description
// Given a sorted array of N distinct integers and a target value X, return the index if the target is found. 
// If not found then return -1.
// Note - Try implementing with O(logN) runtime complexity.
// Input format
// First line contains integers N, the number of distinct integers, and X, the target value. 
// Second line contains N space separated integers.
// Output format
// Print the index of the target element if found else return -1.
// Sample Input -->
// 5 
// 7
// 1 3 5 7 13
// Sample Output -->
// 3
// Explanation
// Target integer 7 is at index 3.

function searchTarget(N,A,X){
    let left = 0, right = N-1;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(A[mid] == X){
            return mid;
        }
        if(A[mid]<X){
            left=mid+1;
        }else{
            right=mid-1;
        }
    }
    return -1;
}
console.log(searchTarget(5,[1,3,5,7,13],7));