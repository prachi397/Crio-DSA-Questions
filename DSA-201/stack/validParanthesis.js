// Problem Description
// Given a string S containing the characters '(', ')', '{', '}', '[' and ']', determine if the input 
// string is valid.
// For an input string to be valid:
// Open brackets must be closed by the same type of brackets.( can be closed by ) only
// Open brackets must be closed in the correct order. ([]) is valid, ([)] is not.
// Note: An empty string is also considered valid.

// Sample Input 1
// ()[]{}
// Sample Output 1
// true
// Explanation 1
// The given sequence of brackets is valid as per the rules specified.

// Sample Input 2
// ([)]
// Sample Output 2
// false
// Explanation 2
// The given sequence of brackets is invalid as per the rules specified.

function validParenthesis(s){
    let stack = [];
    //create a mapping object
    let mapping = {
        ')':'(',
        ']':'[',
        '}':'{'
    }
    //iterate over the string
    for(let i=0;i<s.length;i++){
        //if found any opening bracket
        if(s[i] === '(' || s[i] === '{'|| s[i] === '[')
        {
            stack.push(s[i]); //push it into stack
        }
        //otherwise pop the top element 
        else{
            let top =  stack.pop();
            //if top is not equal to the mapping of element
            if(mapping[s[i]] !== top){
                return false;
            }
        }
    }
    //check if length is 0 
    return stack.length === 0;
}
console.log(validParenthesis("([])"));