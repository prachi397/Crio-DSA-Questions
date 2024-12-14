// Selection sort -> Pick the smallest element from the array and swap it with front. This is basically 
// order the smallest elements in the starting of the array.
// arr = [2,6,4,0,1] - swap(2,0) - > [0,6,4,2,1] -> swap(6,1) -> [0,1,4,2,6]
// -> swap(4,2) -> [0,1,2,4,6] -> sorted array

//logic for sorting
function swap(arr,a,b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
function selectionSort(arr,n){
    //loop through the entire array
    for(let i=0;i<n;i++){
        //becuase i elements were already sorted so start the loop from i till length of the array
        for(let j=i;j<n;j++){
            if(arr[j]<arr[i]){
                swap(arr,i,j);
            }
        }
    }
    return arr;
}
console.log(selectionSort([2,6,4,0,1],5));

//TC - O(n*n) and SC - O(1)