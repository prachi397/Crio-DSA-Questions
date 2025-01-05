// Given an array, arr of positive integers. Find the third largest element in it. Return -1 if the third 
// largest element is not found.

// Examples:
// Input: arr[] = [2, 4, 1, 3, 5]
// Output: 3
// Explanation: The third largest element in the array [2, 4, 1, 3, 5] is 3.
// Input: arr[] = [10, 2]
// Output: -1
// Explanation: There are less than three elements in the array, so the third largest element cannot 
// be determined.
// Input: arr[] = [5, 5, 5]
// Output: 5
// Explanation: In the array [5, 5, 5], the third largest element can be considered 5, as there are no other 
// distinct elements.

//brute force approach - tc is O(nlogn) and sc is O(1)
function thirdLargest(arr) {
    if(arr.length<3){
        return -1;
    }
    arr.sort((a,b)=>a-b);
    return arr[arr.length-3];
}
console.log(thirdLargest([2, 4, 1, 3, 5]));

//optimal approach - tc is O(n) and sc O(1)
function thirdLargestOptimal(arr) {
    if(arr.length<3){
        return -1;
    }
    let largest = Number.NEGATIVE_INFINITY, 
    secondLargest = Number.NEGATIVE_INFINITY, 
    thirdLargest = Number.NEGATIVE_INFINITY;

    for(let i=0;i<arr.length;i++){
        if(arr[i]>=largest){
            thirdLargest = secondLargest;
            secondLargest = largest;
            largest = arr[i];
        }
        else if(arr[i]<=largest && arr[i]>=secondLargest){
            thirdLargest = secondLargest;
            secondLargest = arr[i];
        }else if(arr[i]<= secondLargest && arr[i]>= thirdLargest){
            thirdLargest = arr[i];
        }
    }
    return thirdLargest;
}
console.log(thirdLargestOptimal([2, 4, 1, 3, 5]));