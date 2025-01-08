// Given an integer array arr[] and an integer ele the task is to the remove all occurrences of ele from 
// arr[] in-place and return the number of elements which are not equal to ele. If there are k number of 
// elements which are not equal to ele then the input array arr[] should be modified such that the first k 
// elements should contain the elements which are not equal to ele and then the remaining elements.
// Note: The order of first k elements may be changed.
// Examples:
// Input: arr[] = [3, 2, 2, 3], ele = 3
// Output: 2
// Explanation: The answer is 2 because there are 2 elements which are not equal to 3 and arr[] will be 
// modified such that the first 2 elements contain the elements which are not equal to 3 and remaining 
// elements can contain any element. So, modified arr[] = [2, 2, _, _]
// Input: arr[] = [0, 1, 3, 0, 2, 2, 4, 2], ele = 2

//brute force approach - tc is O(n)
function removeOccurance(arr,ele){
    let idx = 0;
    //iterate over the array
    for(let i=0;i<arr.length;i++){
        //if the current element is not equal to element
        if(arr[i] !== ele){
            //add it to array
            arr[idx] = arr[i];
            idx++; //increament idx
        }
    }
    //lastly return the idx
    return idx;
}
console.log(removeOccurance([0, 1, 3, 0, 2, 2, 4, 2],2));