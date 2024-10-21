// Problem Description
// Write a program to find the peaks in the sequence.
// An element is a peak element if it is greater than its neighbors (a[i] > a[i-1] AND a[i] > a[i+1]).
// For the leftmost element, only check the element to the right of it (a[0] > a[1]). Similarly, 
// for the rightmost element, only check the element to the left of it (a[n-1] > a[n-2]).
// Below is an example, Input: Arr[] = [10,5,6,3,4,8,9,15] Output: [10,6,15]

function findPeak(arr){
    let result = [];
    let n = arr.length;
    if(arr[0]>arr[1]){
        result.push(arr[0]);
    }
    if(arr[n-1]>arr[n-2]){
        result.push(arr[n-1]);
    }
    for(let i=1;i<n-1;i++){
        if(arr[i]>arr[i-1] && arr[i]>arr[i+1]){
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(findPeak([4,2,3,1,5,6,4]));