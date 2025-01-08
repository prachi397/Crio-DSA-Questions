// Given an array arr[] of size n, the task is to find all the Leaders in the array. An element is a Leader 
// if it is greater than or equal to all the elements to its right side.
// Note: The rightmost element is always a leader.
// Examples:
// Input: arr[] = [16, 17, 4, 3, 5, 2]
// Output: [17 5 2]
// Explanation: 17 is greater than all the elements to its right i.e., [4, 3, 5, 2], therefore 17 is a leader. 
// 5 is greater than all the elements to its right i.e., [2], therefore 5 is a leader. 2 has no element to 
// its right, therefore 2 is a leader.

//brute force approach  - here tc O(n*n) and sc is O(n)
function leaders(arr){
    const result = [];
    const n = arr.length;   
    //iterate from 0 to n
    for (let i = 0; i < n; i++) {
        let j;
        //iterate from i+2 to n to check each element
        for (j = i + 1; j < n; j++) {
            //if we found any greater element then break the inner loop
            if (arr[i] < arr[j])
                break;
        }
        //lastly we traverse the entire inner loop then push it into result
        if (j === n)
            result.push(arr[i]);
    }  
    return result;
}
console.log(leaders([16, 17, 4, 3, 5, 2]));

//optimal approach -> tc and sc are O(n)
function leadersOptimal(arr){
    let result = [];
    //the rightmost element will be always maximum
    let maxRight = arr[arr.length-1];
    //push it into reuslt
    result.push(maxRight);
    //iterate over the remaining array from back
    for(let i=arr.length-2;i>=0;i--){
        if(arr[i]>=maxRight){
            maxRight = arr[i];
            result.push(maxRight);
        }
    }
    //lastly reverse the result
    return result.reverse();
}
console.log(leadersOptimal([16, 17, 4, 3, 5, 2]));