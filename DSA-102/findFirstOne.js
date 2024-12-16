// Problem Description
// Given a sorted array consisting of 0s and 1s only, find the index of the first 1. If there’s no 1 
// present in the array, return -1

// Sample Input --->
// 4

// 0 0 1 1

// Sample Output --->
// 2

//binary search technique
function zeroOnes(n, arr) {
    let left = 0;
    let right = n-1;
    let firstIdx = -1;
    while(left<right){
        //get the mid index
        let mid = Math.floor((left+right)/2);
        //if the element is mid is 1 then we will check if there is any index before mid is 1
        if(arr[mid] === 1){
            firstIdx = mid;
            right = mid-1;
        }
        //if mid element is not 1 means we need to search from the rigth array so left = mid+1
        else{
            left = mid+1;
        }
    }
    return firstIdx;
}
console.log(zeroOnes(4,[0,0,1,1]));