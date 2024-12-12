//find all the subarrays

function findAllSubArr(arr){
    let subArrays = [];
    //loop through the arr
    for(let i=0;i<arr.length;i++){
        let subArr=[]
        //loop from i to length of the arr
        for(let j=i;j<arr.length;j++){
            //push the element in subarray
            subArr.push(arr[j]);
            //finally push the subarray in final array
            subArrays.push([...subArr]);
        }
    }
    return subArrays;
}
console.log(findAllSubArr([1,2,3,4,5]))