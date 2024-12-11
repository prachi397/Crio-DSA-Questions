// Problem Description
// Partitioning an array means to split an array along an element, such that it divides the array into two parts
// with some specific property. The element that partitions the array is called the partitioning element.
// Given an array, find the element, partitioning along which, the sum of elements to its left, equals 
// the sum of elements to its right. The partition element itself is to be excluded from both sums.
// Return the index of the partitioning element. If no such element exists, return -1.

// Sample Input --->
// 4
// 1 4 2 5

// Sample Output --->
// 2

// Explanation --->
// Since 1 + 4 = 5 where 2 is such an element.

function equalPartition(n,arr){
    //create the prefix sum array
    let prefixArr = [];
    //prefix sum for the first element will be the element itself
    prefixArr[0]=arr[0];
    //loop through 1 to n-1 to calculate prefix sum
    for(let i=1;i<n;i++){
        prefixArr[i] = prefixArr[i-1]+arr[i];
    }
    //create the suffix sum array
    let suffixArr = [];
    //suffix sum for the last element will be the element itself
    suffixArr[n-1] = arr[n-1];
    //loop from n-1 to 0;
    for(let i=n-2;i>=0;i--){
        suffixArr[i] = suffixArr[i+1]+arr[i];
    }
   
    //loop through the array 0 to n
    for(let i=0;i<n;i++){
        //check of prefix sum and suffix sum is eqaual for a particular element
        if(prefixArr[i] === suffixArr[i]){
            //return index
            return i;
        }
    }
    //if no such index found then return -1
    return -1;
}
console.log(equalPartition(4,[1,4,2,5]));

//here both TC and SC will be 0(n)