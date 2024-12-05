// Problem Description
// You are given two arrays A and B of size n and m respectively. You need to find the resultant array of 
// the union between these two arrays. Elements are not necessarily distinct.

// Note:-Union of the two arrays can be defined as the set containing distinct elements from both 
// the arrays. If there are repetitions, then only one occurrence of element should be printed 
// in the union. Resultant Array should be in sorted order

// Sample Input --->
// 5 3

// 1 2 3 4 5

// 1 2 3

// Sample Output --->
// 1 2 3 4 5

function unionOfTwoArrays(A, B) {
    //concatenate both the arrays and convert them to set
    let set = new Set([...A,...B]);
    //consver set to array and sort the array
    let result = Array.from(set).sort((a,b)=>a-b);
    return result;
}
let arr1 = [1,2,5,4];
let arr2 = [1,2,3];
console.log(unionOfTwoArrays(arr1,arr2));