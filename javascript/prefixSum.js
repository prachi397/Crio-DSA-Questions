//              [1,4,5,8,2]
// prefix sum = [0,1,5,10,18]
// suffix sum = [19,15,10,2,0]

//prefix sum
function prefixSum(arr){
    let prefixSumArr = [];
    prefixSumArr[0] = 0;
    for(let i=1;i<arr.length;i++){
        prefixSumArr[i] = prefixSumArr[i-1]+arr[i-1];
    }
    return prefixSumArr;
}
let arr = [1,4,5,8,2];
console.log(prefixSum(arr));

//suffix sum
function suffixSum(arr){
    let suffixSumArr = [];
    suffixSumArr[arr.length-1] = 0;
    for(let i=arr.length-2;i>=0;i--){
        suffixSumArr[i] = suffixSumArr[i+1]+arr[i+1];
    }
    return suffixSumArr;
}
console.log(suffixSum(arr));