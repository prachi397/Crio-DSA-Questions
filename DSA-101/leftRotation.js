// Problem Description
// You are given a array of numbers. Your task is to rotate the given array left(anti-clockwise) 
// by 1 units from the starting index. You are required to return the rotated array.
// Sample Input 1
// 1 2 3 4 5
// Sample Output 1
// 2 3 4 5 1

function leftRotate(arr){
    let n = arr.length;
    let temp = arr[0];
    for(let i=0;i<n-1;i++){
        arr[i] = arr[i+1];
    }
    arr[n-1] = temp;
    return arr;
}

console.log(leftRotate([1,2,3,4,5]));