//Merge Sort -> follows divide and merge approach

function merge(arr,low,mid,high){
    let temp = [];
    //left pointer is from the start of first array
    let left = low;
    //right pointer is from the start of second array
    let right = mid+1;
    //check when left is smamller or equal to mid and right is smaller equal to high
    while(left <= mid && right <= high){
        //compare element of left and right and push the smaller one in temp
        if(arr[left] <= arr[right]){
            temp.push(arr[left]);
            left++;
        }else{
            temp.push(arr[right]);
            right++;
        }
    }
    //if any element left in first arry then push them into temp
    while(left<=mid){
        temp.push(arr[left]);
        left++;
    }
     //if any element right in first arry then push them into temp
    while(right<=high){
        temp.push(arr[right]);
        right++;
    }
    //finally we get the temp array which is merged and sorted but we have to assign the elements of temp
    // into array
    //loop through low to high
    for(let i=low;i<=high;i++){
        arr[i] = temp[i-low];
    }
}
function mergeSort(arr,low,high){
    //base condition for recursion
    //if low became greater than or equal to high that mean no element so simply return
    if(low>=high){
        return;
    }
    //calculate mid element
    let mid = Math.floor((low+high)/2);
    //get the first array 0 to mid
    mergeSort(arr,0,mid);
    //get the second array mid+1 to length of the array(high)
    mergeSort(arr,mid+1,high);
    //finally merge all the divide arrays
    merge(arr,low,mid,high);
}

let mergeSortedArr = [3,1,2,4,1,5,2,6,4]
mergeSort(mergeSortedArr,0,mergeSortedArr.length-1);
console.log(mergeSortedArr);

//here time complexity is O(nlogn) and space complexity is O(n);