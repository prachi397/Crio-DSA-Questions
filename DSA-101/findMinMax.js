// Problem Description
// Given an array of integers, write a program to find the sum of the minimum and maximum values of the array.
// Input format
// First line contains an integer N, the size of the array
// Second line contains the integers present in the array
// Output format
// Return expected integer
// Sample Input 
// 5
// 10 15 4 5 19
// Sample Output 
// 23

function findMinMaxEle(arr){
    let min = arr[0];
    let max = arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<min){
            min = arr[i];
        }
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return (min+max);
}
console.log(findMinMaxEle([10,15,4,5,19]));