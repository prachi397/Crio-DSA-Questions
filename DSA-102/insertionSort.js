//insertion sort -> [2,6,4,0,1]
//         sorted arr -> [2]   [6,4,0,1] <- unsorted arr
// we have to insert the elements of unsorted array into sorted array such that the sorted array
// remains sorted.              
//    [2,6]  [4,0,1]
//    [2,4,6]  [0,1]
//    [0,2,4,6] [1]
//    [0,1,2,4,6]  -> whole sorted array
//logic is that sorted arr range will be 0 to i-1 and unsorted arr range will be i to n
//element will go to the left and after that all will shift by one.

//function to swap two elements
function swap(arr,a,b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
function insertionSort(arr,n){
    //loop through the array
    for(let i=0;i<n;i++){
        //comparision will start from the first element
        let j = i;
        //first element(element at 0th index) is already sorted so we check j>0  and then checking 
        //previous element is greater than next element then swap
        while(j>0 && arr[j-1]>arr[j]){
            swap(arr,j-1,j);
            j--;
        }
    }
    return arr;
}
console.log(insertionSort([2,6,4,0,1],5));