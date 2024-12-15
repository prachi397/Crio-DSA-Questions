// Problem Description
// Given a positive integer n, find the smallest integer which has exactly the same digits existing in 
// the integer n and is greater in value than n. If no such positive integer exists, return -1.

// Sample Input --->
// 12

// Sample Output --->
// 21

// Explanation --->
// There is only one number greater than 12 which is composed of 2 and 1 and it is 21.

function nextGreaterElementWithSameSetOfDigits(n) {
    //convert the number into string and split it into array of digits
    let digits = n.toString().split('');
    let dip = -1;
    //find dip by running loop from second last index to 0
    for(let i=digits.length-2;i>=0;i--){
        //if digit at i index is smaller then digit at i+1 index
        if(digits[i]<digits[i+1]){
            dip = i;
            break;
        }
    } 
    //if no dip found then return -1
    if(dip === -1){
        return -1;
    }
    //find just greater digit in right side over j index from last index
    let nextGreaterDigit = dip+1;
    for(let j=dip+1;j<digits.length;j++){
        //if digit at j index is greater than digit at i index
        if(digits[j]>digits[dip]){
            nextGreaterDigit = j;
            break;
        }
    }
    // swap the digits at i (dip) and j (nextGreaterDigit)
    [digits[dip],digits[nextGreaterDigit]] = [digits[nextGreaterDigit],digits[dip]];
    //reverse the array from i+1(dip+1) till last index
    let left = dip+1, right = digits.length-1;
    while(left<right){
        [digits[left],digits[right]] = [digits[right],digits[left]];
        left++;
        right--;
    }
   //return the character array converted into a integer
   return parseInt(digits.join(''));
}
console.log(nextGreaterElementWithSameSetOfDigits(123)); 