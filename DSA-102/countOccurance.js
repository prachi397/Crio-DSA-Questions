// Problem Description
// Given a sorted integer array of length n with possible duplicate elements. Find the number of occurrences
// of an integer k using binary search.

// Sample Input --->
// 5 2
// -1 2 2 4 7

// Sample Output --->
// 2

// Explanation --->
// The integer 2 occurs 2 times in the given array.

//function to find first index of target k (binary search)
function firstIndex(k,arr){
    let left = 0, right = arr.length-1;
    while(left <= right){
        //get mid element
        let mid = Math.floor((left+right)/2);

        //if the element at mid is equal to target
        if(arr[mid] === k){
            //as we have to find the first index so we will check on left portion
            right = mid-1;
        }else if(arr[mid] < k){
            left = mid+1;
        }else{
            right = mid-1;
        }
    }
    //return the left index
    return left;
}

//function to last first index of target k (binary search)
function lastIndex(k,arr){
    let left = 0, right = arr.length-1;
    while(left <= right){
        //get mid element
        let mid = Math.floor((left+right)/2);
         //if the element at mid is equal to target
        if(arr[mid] === k){
            //as we have to find the last index so we will check on right portion
            left = mid+1;
        }else if(arr[mid] < k){
            left = mid+1;
        }else{
            right = mid-1;
        }
    }
    //return the right index
    return right;
}

//function to count occurance or a target k
function countOccurrences(k, arr){
    //find the first occurance of k
    let firstIdx = firstIndex(k,arr);
    //find the last occurance of k
    let lastIdx = lastIndex(k,arr);
    //corner case : if first occurance index is more than last occurance index
    if(firstIdx > lastIdx){
        return 0;
    }
    //return last occurance - first occurance + 1
    return (lastIdx-firstIdx+1);
}
console.log(countOccurrences(2,[-1,2,2,2,4,7]));