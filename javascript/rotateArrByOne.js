//Rotate array by one place left
//arr = [1,2,3,4,5]
//o/p = [2,3,4,5,1]

function rotateArr(arr){
    let temp = arr[0];  //store the first element in temp
    //iterate over the array
    for(let i=0;i<arr.length-1;i++){
        arr[i] = arr[i+1];  //shift all the elements left by 1 place
    }
    //add temp to the last of the array 
    arr[arr.length-1] = temp;
    return arr;
}
console.log(rotateArr([1,2,3,4,5]));
//here tc is O(n) and sc is O(1)