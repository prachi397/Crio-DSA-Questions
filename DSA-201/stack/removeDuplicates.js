// Problem Description
// You are given a string s, consisting of lowercase letters. You need to make duplicate removal on s until 
// you no longer can.
// A duplicate removal consists of choosing two adjacent equal characters and removing both of them.
// Return the final string after all such duplicate removals have been made.

// Function definition
// You have to complete the given function. It accepts one argument -the input string, and returns the 
// updated string.

// Sample Input --->
// abbaca
// Sample Output --->
// ca
// Explanation
// Initial String: abbaca
// After removing "bb" : aaca
// After removing "aa" : ca (There are no more duplicates)
function removeAdjacentDuplicates(s){
    const stack = [];

    //iterate over the string
    for(let i=0;i<s.length;i++){
        //if the stack length is greater then the 0 and the element at the top of the stack is equal to 
        //the current element of string that means we founc duplicate so remove it from stack
        if(stack.length>0 && stack[stack.length-1] === s[i]){
            stack.pop();
        }
        //otherwise push it into stack
        else{
            stack.push(s[i]);
        }
    }
    //lastly join the elements of stack and return
    return stack.join('');
}
console.log(removeAdjacentDuplicates("abbaca"));