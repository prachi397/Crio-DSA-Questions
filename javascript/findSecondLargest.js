// Given an array of positive integers arr[] of size n, the task is to find second largest distinct element 
// in the array.
// Note: If the second largest element does not exist, return -1.
// Examples:
// Input: arr[] = [12, 35, 1, 10, 34, 1]
// Output: 34
// Explanation: The largest element of the array is 35 and the second largest element is 34.

// Input: arr[] = [10, 5, 10]
// Output: 5
// Explanation: The largest element of the array is 10 and the second largest element is 5.

// Input: arr[] = [10, 10, 10]
// Output: -1
// Explanation: The largest element of the array is 10 there is no second largest element.

//brute force approach
function findSecondLargestBrute(arr){
    //sort the array in ascendent order
    arr.sort((a,b)=>a-b);
    let n = arr.length;
    //iterate from the second last element
    //and check if the second last element is not equal to the last element 
    for(let i=n-2;i>=0;i--){
        if(arr[i] !== arr[n-1]){
            return arr[i];
        }
    }
    return -1;
}
console.log(findSecondLargestBrute([10, 5, 10]));