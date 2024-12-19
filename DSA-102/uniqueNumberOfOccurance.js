// Given an array of integers arr, return true if the number of occurrences of each value in the array 
// is unique or false otherwise.
// Example 1:
// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
// Example 2:
// Input: arr = [1,2]
// Output: false
// Example 3:
// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true

function uniqueOccurrences(arr){
    let mp = new Map();
    //iterate over the array and store the frequency in map
    for(let i=0;i<arr.length;i++){
        if(mp.has(arr[i])){
            mp.set(arr[i],mp.get(arr[i])+1);
        }else{
            mp.set(arr[i],1);
        }
    }
    //logic is that all the map values should be unique so we added all the values into set
    let frequencySet = new Set(mp.values());
    //if the size of set is equal to the map size (all values of map are unique) return true else 
    // return false;
    return frequencySet.size === mp.size;
}
console.log(uniqueOccurrences([1,2,2,1,1,3]));
//tc O(n)