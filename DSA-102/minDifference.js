// Problem Description
// Find the minimum difference possible between any two elements in the given array.

// Sample Input --->
// 3
// 1 2 4

// Sample Output --->
// 1

// Explanation --->
// 2 - 1 = 1 minimum difference

function minDiff(n, arr) {
    //sort the array
    arr.sort((a,b)=>a-b);
    let minDiff = Infinity;
    //loop from 1 (because we have to check one previous element (i-1)) to n 
    for(let i=1;i<n;i++){
        //get the current difference
        const difference = arr[i]-arr[i-1];
        //if the current differenc eis minimum than the minDiff
        if(difference<minDiff){
            //make it minDiff
            minDiff = difference;
        }
    }
    return minDiff;
}
console.log(minDiff(3,[5,1,3]));