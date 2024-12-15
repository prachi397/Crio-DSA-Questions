//Quick sort -> pick a pivot element and place it into its correct place into the sorted array.
//function to inser pivot into its correct position
function insertPivot(arr,low,high){
    //let pivot be the first element
    let pivot = arr[low];
    //use two pointers one on the low and other on the high
    let i = low, j= high;
    //loop untill i<j
    while(i<j){
        //elements smaller than pivot and i should be less than high
        while(arr[i]<=pivot && i<high){
            i++;
        }
        //elements greater than pivot and j greater than low
        while(arr[j]>pivot && j>low){
            j--;
        }
        if(i<j){
            //swap 
            [arr[i],arr[j]] = [arr[j],arr[i]];
        }
    }
    //swap element at low and j
    [arr[low],arr[j]] = [arr[j],arr[low]];
    return j;
}
function quickSortImp(arr,low,high){
    //low<high that means array has element more than one -> single element is alreayd sorted
    if(low<high){
        //function to inser the pivot element into its correct place and get the index of pivot element
        let pivotIdx = insertPivot(arr,low,high);
        //left arr will have elements less than pivot
        quickSortImp(arr,low,pivotIdx-1);
        //right arr will have elements greater than pivot
        quickSortImp(arr,pivotIdx+1,high);
    }
    return arr;
}
let arr = [4,6,2,5,7,9,1,3];
console.log(quickSortImp(arr,0,arr.length - 1));

//Time complexity is O(nlogn) and Space complexity is O(1)