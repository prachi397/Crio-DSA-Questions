// Problem Description
// Given a string S containing just the characters '(' and ')', find the length of the longest valid 
// (well-formed) parentheses substring.

// Sample Input 1
// ()(()(())

// Sample Output 1
// 6

// Explanation
// The last 6 characters of the string forms the longest valid substring i.e. "()(())".

//approach is Whenever we see a closing bracket we can calculate the length of that particular 
// substring which ends at this closing bracket. If the stack is empty, it means there is no opening 
// bracket for this closing bracket.

function longestValidParentheses(s){
    let stack = [];
    let ans = 0;
    stack.push(-1); //intially push -1 in the stack
    //iterate over the string
    for(let i=0;i<s.length;i++){
        //if we found ( then push the index into stack
        if(s[i] === '('){
            stack.push(i);
        }
        //otherwise : )
        else{
            stack.pop();  //first pop the index from the stack
            //check if stack became empty
            if(stack.length === 0){
                stack.push(i);  //then push the index
            }
            //stack has element
            else{
                let top = stack[stack.length-1]; //find the top index
                ans = Math.max(ans,i-top);
            }
        }
    }
    return ans;
}
console.log(longestValidParentheses("()(()(())"));