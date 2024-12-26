//Problem Description
// Given an array, print the next smaller element for every element. The next smaller element for an element x 
// is the first smaller element on the right side of x in the array. Elements for which no next smaller element 
// exists, consider it as -1.

// Sample Input --->
// 5
// 8 2 5 10 4
// Sample Output --->
// 2 -1 4 4 -1
// Explanation
// In the given array, next smaller element to 8 is 2 and for 5 & 10 it is 4. For 2 and 4 the next smaller 
// element does not exist so the final ans is [2, -1, 4, 4, -1].

function nextSmallerElement(arr) {
    const ans = new Array(arr.length).fill(-1);
    const stack = [];
    for(let i=0;i<arr.length;i++){
        while(stack.length>0 && arr[stack[stack.length-1]]>arr[i]){
            const idx = stack.pop();
            ans[idx] = arr[i];
        }
        stack.push(i);
    }
    return ans;
}
console.log(nextSmallerElement([8,2,5,10,4]));