// Given an unsorted array arr containing both positive and negative numbers. Your task is to rearrange the 
// array and convert it into an array of alternate positive and negative numbers without changing the 
// relative order.
// Note:
// - Resulting array should start with a positive integer (0 will also be considered as a positive integer).
// - If any of the positive or negative integers are exhausted, then add the remaining integers in the answer 
// as it is by maintaining the relative order.
// - The array may or may not have the equal number of positive and negative integers.

// Examples:
// Input: arr[] = [9, 4, -2, -1, 5, 0, -5, -3, 2]
// Output: [9, -2, 4, -1, 5, -5, 0, -3, 2]
// Explanation: The positive numbers are [9, 4, 5, 0, 2] and the negative integers are [-2, -1, -5, -3]. 
// Since, we need to start with the positive integer first and then negative integer and so on (by maintaining 
// the relative order as well), hence we will take 9 from the positive set of elements and then -2 after that 
// 4 and then -1 and so on.

//here tc and sc both are O(n)
function  rearrange(arr){
    let pos = [], neg = [];
    //extract all the positive and negative elements
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            neg.push(arr[i]);
        }else{
            pos.push(arr[i]);
        }
    }

    let posIdx = 0, negIdx = 0, i = 0;
    //iterate both the arrays
    while(posIdx<pos.length && negIdx<neg.length){
        //if it is even idx then number must be positive
        if(i%2 === 0){
            arr[i] = pos[posIdx];
            i++;
            posIdx++;
        }
        //at odd index it will negative
        else{
            arr[i] = neg[negIdx];
            i++;
            negIdx++;
        }
    }
    //iterate for the remaining elements
    while(posIdx<pos.length){
        arr[i] = pos[posIdx];
        i++;
        posIdx++;
    }
     while(negIdx<neg.length){
        arr[i] = neg[negIdx];
        i++;
        negIdx++;
    }
    return arr;
}
console.log(rearrange([9, 4, -2, -1, 5, 0, -5, -3, 2]));