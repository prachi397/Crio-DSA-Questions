// write a function to find the 3 closest elements to k in sorted array.
// i/p -> [1,2,3,4,8,9], k=5
// o/p -> [2,3,4]/[3,4,8]

//brute force approach
function findClosestBrute(arr,k){
    let result = [];
   let diffArr = arr.map((ele)=>({
    value:ele,
    diff: Math.abs(ele-k)
 } ));
  diffArr.sort((a,b)=>a.diff-b.diff);
  return diffArr.slice(0,3).map((ele)=>ele.value);
}
console.log(findClosestBrute([1,2,3,4,8,9],5));

//optimal approach
function findClosest(arr,k){
    let left = 0, right = arr.length-1;
    while(left<right){
        let mid = Math.floor((left+right)/2);
        if(arr[mid]<k){
            left = mid+1;
        }else{
            right = mid;
        }
    }
    let low = left-1;
    let high = left;
    const result = [];
     while (result.length < 3) {
        if (low < 0) {
            result.push(arr[high++]);
        } else if (high >= arr.length) {
            result.push(arr[low--]);
        } else if (Math.abs(arr[low] - k) <= Math.abs(arr[high] - k)) {
            result.push(arr[low--]);
        } else {
            result.push(arr[high++]);
        }
    }
    return result;
}
console.log(findClosest([1,2,3,4,8,9],5))
