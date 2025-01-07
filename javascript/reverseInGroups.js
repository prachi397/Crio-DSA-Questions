// Given an array arr of positive integers. Reverse every sub-array group of size k.
// Note: If at any instance, k is greater or equal to the array size, then reverse the entire array. You 
// shouldn't return any array, modify the given array in place.

// Examples:
// Input: arr[] = [1, 2, 3, 4, 5], k = 3
// Output: [3, 2, 1, 5, 4]
// Explanation: First group consists of elements 1, 2, 3. Second group consists of 4,5.

function reverseInGroups(arr, k) {
    //iterate throught the at each kth step
    for(let i=0;i<arr.length; i+=k){
        //take 2 pointers left from the start
        let left = i;
        //and right on the kth place from start each time or n-1 if its the last segment and we have elements
        //less that k
        let right = Math.min(i+k-1,arr.length-1);
        //while left is less the right swap the elements
        while(left<right){
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;  //increase left
            right--; //decrease right
        }
    }
    return arr;
}
console.log(reverseInGroups([1, 2, 3, 4, 5],3));

//here tc is O(n) and sc is O(1)