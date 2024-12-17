// You have a long flowerbed in which some of the plots are planted, and some are not. However, 
// flowers cannot be planted in adjacent plots.
// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not 
// empty, and an integer n, return true if n new flowers can be planted in the flowerbed without 
// violating the no-adjacent-flowers rule and false otherwise.

// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:
// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

function canPlaceFlowers(flowerbed, n){
    let len = flowerbed.length;
    //iterate through the array
    for(let i=0;i<len;i++){
        if(flowerbed[i] === 0 &&   //the current element should be 0
            (i===0 || flowerbed[i-1] === 0) && // if it is first index or if not then the previous ele should be 0
            (i===len-1 || flowerbed[i+1] === 0) // if it is last index or if not then the next ele should be 0
        ){
            //set the current value to 1 -> plant flowers
            flowerbed[i] = 1;
            n--;
            //if n became 0 then stop the loop and return
            if(n===0){
                return true;
            }
        }
    }
    //lastly check if n is less than or equal to 0 then true
    if(n<=0){
        return true;
    }
    //otherwise false;
    else{
        return false;
    }
}
console.log(canPlaceFlowers([1,0,0,0,1],1));