// Given a sorted array arr[] of distinct integers. Sort the array into a wave-like array(In Place). 
// In other words, arrange the elements into a sequence such that 
// arr[1] >= arr[2] <= arr[3] >= arr[4] <= arr[5].....
// If there are multiple solutions, find the lexicographically smallest one.

// Note: The given array is sorted in ascending order, and you don't need to return anything to change the 
// original array.

// Examples:
// Input: arr[] = [1, 2, 3, 4, 5]
// Output: [2, 1, 4, 3, 5]
// Explanation: Array elements after sorting it in the waveform are 2, 1, 4, 3, 5.

//optimal approach
function swap(arr,a,b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
function waveSort(arr){
    //iterate through the array at even index (element will be greater at even index)
    for(let i=0;i<arr.length-1;i+=2){
        if(i>0 && arr[i-1]>arr[i]){
            swap(arr,i-1,i);
        }
        if(i<arr.length-1 && arr[i]<arr[i+1]){
            swap(arr,i,i+1);
        }
    }
    return arr;
}
console.log(waveSort([1, 2, 3, 4, 5]));
//here tc is O(n) and sc is O(1)