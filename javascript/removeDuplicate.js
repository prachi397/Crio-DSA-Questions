// Given a sorted array arr. Return the size of the modified array which contains only distinct elements.
// Note:
// 1. Don't use set or HashMap to solve the problem.
// 2. You must return the modified array size only where distinct elements are present and modify the original 
// array such that all the distinct elements come at the beginning of the original array.
// Examples :
// Input: arr = [2, 2, 2, 2, 2]
// Output: [2]
// Explanation: After removing all the duplicates only one instance of 2 will remain i.e. [2] so modified 
// array will contains 2 at first position and you should return 1 after modifying the array, the driver code 
// will print the modified array elements.

//using set - here tc and sc both are O(n)
function maxDuplocatesSet(arr){
    let set = new Set();
    let idx = 0;
    for(let i=0;i<arr.length;i++){
        if(!set.has(arr[i])){
            set.add(arr[i]);
            arr[idx] = arr[i];
            idx++;
        }
    }
    return idx;
}
console.log(maxDuplocatesSet([1, 2, 2, 3, 4, 4, 4, 5, 5]));

//optimal approach - tc is O(n) and sc is O(1)
function removeDuplicates(arr){
   let idx = 0;
   for(let i=0;i<arr.length;i++){
    if(arr[i] !== arr[i+1]){
        arr[idx] = arr[i];
        idx++;
    }
   }
   return idx;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 4, 5, 5]));