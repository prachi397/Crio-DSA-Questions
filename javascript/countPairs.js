// Given an array arr[] and an integer target. You have to find the number of pairs in the array whose sum 
// is strictly less than the target.

// Examples:
// Input: arr[] = [7, 2, 5, 3], target = 8
// Output: 2
// Explanation: There are 2 pairs with sum less than 8: (2, 5) and (2, 3)

//brute force - here tc is O(n*n) and sc is O(1)
 function countPairs(arr, target) {
    let count = 0;
        for(let i=0;i<arr.length;i++){
            for(let j=i+1;j<arr.length;j++){
                if(arr[i]+arr[j]<target){
                    count++;
                }
            }
        }
        return count;
}
console.log(countPairs([7, 2, 5, 3],8));

//optimal approach - here tc is O(nlogn) and sc is O(1)
function countPairsOptimal(arr,target){
    //sort the array
    arr.sort((a,b)=>a-b);
    let count = 0;
    let i=0,j=arr.length-1;
    while(i<j){
        if(arr[i]+arr[j]<target){
            //that means all the pairs between i and j will be less than
            count += (j-i);
            i++;
        }else{
            j--;
        }
    }
    return count;
}
console.log(countPairsOptimal([7, 2, 5, 3],8))