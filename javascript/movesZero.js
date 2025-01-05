//moves all the zeros from the end of the array inplace
//here tc is O(n) and sc is O(1)
function pushZerosToEnd(arr) {
    let idx = 0, zeroCount = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            arr[idx] = arr[i];
            idx++;
        }else{
            zeroCount++;
        }
    }
    for(let i=0;i<zeroCount;i++){
        arr[idx] = 0;
        idx++;
    }
    return arr;
}
console.log(pushZerosToEnd([1, 2, 0, 4, 3, 0, 5, 0]));