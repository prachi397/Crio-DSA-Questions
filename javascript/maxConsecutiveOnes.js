// Given a binary array, find the count of a maximum number of consecutive 1s present in the array.
// Examples : 
// Input: arr[] = {1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1}
// Output: 4
// Explanation: The maximum number of consecutive 1’s in the array is 4 from index 8-11.

// Input: arr[] = {0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1}
// Output: 1
// Explanation: The maximum number of consecutive 0’s in the array is 1 from index 0-1.

//brute force approach - TC is O(n) and sc is O(1)
function getMaxLength(arr){
    let result = 0, count = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] === 0){
            count = 0;
        }else{
            count++;
            result = Math.max(result,count);
        }
    }
    return result;
}
console.log(getMaxLength([1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1]));