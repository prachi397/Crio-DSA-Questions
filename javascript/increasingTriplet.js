// Input: nums = [1,2,3,4,5]
// Output: true
// Explanation: Any triplet where i < j < k is valid.
//we have to check if there exist any one such triplet

function increasingTriplet(arr){
    let smallest = Infinity, middle = Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<=smallest){
            smallest = arr[i];
        }else if(arr[i]<=middle){
            middle = arr[i];
        }else{
            return true;
        }
    }
    return false;
}
console.log(increasingTriplet([5,4,3,2,1]));