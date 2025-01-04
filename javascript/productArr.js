// Product of Array Except Self
// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

function productExceptSelf(arr){
    //get prefix product
    let prefixArr = [];
    prefixArr[0] = 1;
    for(let i=1;i<arr.length;i++){
        prefixArr[i] = prefixArr[i-1]*arr[i-1];
    }
    //get suffix product
    let suffixArr = [];
    suffixArr[arr.length-1] = 1;
    for(let i=suffixArr.length-2;i>=0;i--){
        suffixArr[i] = suffixArr[i+1]*arr[i+1];
    }
    //add both
    for(let i=0;i<arr.length;i++){
        arr[i] = suffixArr[i]*prefixArr[i];
    }
    return arr;
}
let arr = [1,2,3,4];
console.log(productExceptSelf(arr));