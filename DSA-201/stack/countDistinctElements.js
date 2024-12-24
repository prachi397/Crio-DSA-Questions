// Problem Description
// Given an array of N elements and an integer B, you have to find the count of distinct numbers in all 
// windows of size B.
// You have to return an array of size N-B+1 where i'th element in the array is the number of distinct 
// elements in sequence Ai, Ai+1 ,..., Ai+B-1. If B > N, return an empty array.

// Function definition
// You have to implement the given function. It accepts three arguments - n, b and the input array. 
// You have to return the new array as described.

// Sample Input 1
// 6 3
// 1 2 1 3 4 3

// Sample Output 1
// 2 3 3 2

// Explanation
// First range will be [1,2,1] , in which number of distinct elements are 2
// Second range will be [2,1,3], in which number of distinct elements are 3
// Third range will be [1,3,4], in which number of distinct elements are 3
// Fourth range will be [3,4,3], in which number of distinct elements are 2

//using sliding window approach - tc-O(N)
function countDistinctElements(b, arr) {
    let mp = new Map();
    let result = [];
    //iterate for the first window
    for(let i=0;i<b;i++){
        //get frequency of each element of first window
        if(mp.has(arr[i])){
            mp.set(arr[i],mp.get(arr[i])+1);
        }else{
            mp.set(arr[i],1);
        }
    }
    //after stroing element of first window in map, push its size into result
    result.push(mp.size);
    
    //slide the window
    for(let i=b;i<arr.length;i++){
        //get the frequency of each element 
        if(mp.has(arr[i])){
            mp.set(arr[i],mp.get(arr[i])+1);
        }else{
            mp.set(arr[i],1);
        }
        //left element to be excluded fromt the window
        let leftEle = arr[i-b];
        //if frequency of left element is 1 then we can simply delete it
        if(mp.get(leftEle) === 1){
            mp.delete(leftEle);
        }
        //otherwise reduce its frequency by 1
        else{
            mp.set(leftEle, mp.get(leftEle)-1);
        }
        //push the map size into result
        result.push(mp.size);
    }
    //return result
    return result;
}
console.log(countDistinctElements(3,[1,2,1,3,4,3]));