// Problem Description
// Given an array A having N elements, the task is to find the next greater element(NGE) for each 
// element of the array in order of their appearance in the array. If no such element exists, output -1. 
// This should be achieved with a time complexity of O(n).

// Function definition
// You have to implement the given function. It accepts the original array as an argument, and returns 
// the new next greater element array.

// Sample Input 1
// 4
// 1 3 2 4

// Sample Output 1
// 3 4 4 -1

// Explanation 1
// In the array, the next larger element to 1 is 3 , 3 is 4 , 2 is 4 and for 4, there is no such 
// greater element, hence -1.

//brute force approach -- here tc is O(n*n) and sc is O(n)
function nextLargerElement(arr) {
    let ans = new Array(arr.length).fill(-1);
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            if(arr[j]>arr[i]){
                ans[i] = arr[j];
                break;
            }
        }
    }
    return ans;
}
console.log(nextLargerElement([1,3,2,4]));

//optimal approach  - tc and sc both are O(n)
function nextLargerElementOptimal(arr) {
    let ans = new Array(arr.length).fill(-1);
    let stack = [];
    //iterate through the array
    for(let i=0;i<arr.length;i++){
        //stack.length>0 when stack is empty no element to pop thats why checking
        // arr of top index of the stack is less than array element then
        //  // Pop elements from the stack that are smaller or equal to the current element
        while(stack.length>0 && arr[stack[stack.length-1]]<arr[i]){
            let idx = stack.pop();
            ans[idx] = arr[i];
        }
        //stroe the current index into top
        stack.push(i);
    }
    return ans;
}
console.log(nextLargerElementOptimal([1,3,2,4]));