// Given an integer array, find a maximum product of a triplet in the array.

// Examples: 
// Input:  [10, 3, 5, 6, 20]
// Output: 1200
// Explanation: Multiplication of 10, 6 and 20

// Input:  [-10, -3, -5, -6, -20]
// Output: -90
// Input:  [1, -4, 3, -6, 7, 0]
// Output: 168

//tc is O(n) and sc is O(1)
function maxProduct(arr){
    let max1 = Number.NEGATIVE_INFINITY,
    max2 = Number.NEGATIVE_INFINITY,
    max3 = Number.NEGATIVE_INFINITY;
    let min1 = Number.POSITIVE_INFINITY,
    min2 = Number.POSITIVE_INFINITY;

    //iterate over the array
    for(let i=0;i<arr.length;i++){
        //find the three maximum number
        if(arr[i]>max1){
            max3 = max2;
            max2 = max1;
            max1 = arr[i];
        }else if(arr[i]>max2){
            max3 = max2;
            max2 = arr[i];
        }else if(arr[i]>max3){
            max3 = arr[i];
        }
        //find 2 minimum numbers
        if(arr[i]<min1){
            min2 = min1;
            min1 = arr[i];
        }else if(arr[i]<min2){
            min2 = arr[i];
        }
    }
    //finally return the maximum product
    return Math.max(max1*max2*max3,max1*min1*min2);
}
console.log(maxProduct([10, 3, 5, 6, 20]));