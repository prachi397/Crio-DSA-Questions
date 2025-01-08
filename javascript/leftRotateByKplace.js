// Given an array arr[]. Rotate the array to the left (counter-clockwise direction) by d steps, 
// where d is a positive integer. Do the mentioned change in the array in place.
// Note: Consider the array as circular.
// Examples :
// Input: arr[] = [1, 2, 3, 4, 5], d = 2
// Output: [3, 4, 5, 1, 2]
// Explanation: when rotated by 2 elements, it becomes 3 4 5 1 2.

//helper function to reverse
function reverse(arr,left,right){
    while(left<right){
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}
function rotateArrByD(arr,d){
    //handling if d is greater than 
    d = d%arr.length;
    //if d is 0 then no rotation required
    if(d===0){
        return arr;
    }
    //reverse by first d numbers
    reverse(arr,0,d-1);
    //reverse d+1 to n-1 
    reverse(arr,d,arr.length-1);
    //reverse the entire array
    reverse(arr,0,arr.length-1);
    return arr;
}
console.log(rotateArrByD([1, 2, 3, 4, 5],2));
//here tc is O(n) and sc is O(1)