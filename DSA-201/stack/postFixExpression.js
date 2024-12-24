// Problem Description
// Postfix expressions are an ordering of mathematical operations, where the operator(+,-,* etc) 
// comes after the operands.
// For instance, an operation 2 + 3 (infix notation, which humans use) will be represented as 2 3 + in 
// postfix notation. The computers can understand postfix notation.
// Your job is to evaluate the given postfix expression. The expression is given as a string where each 
// token is separated by a space.
// The possible operators can be +, - and *
// Note that all operands(numbers) are assumed to be non-negative.

// Sample Input 1
// 2 3 +
// Sample Output 1
// 5
// Explanation 1
// 3 + 2 = 5

// Sample Input 2
// 2 3 1 * + 9 -
// Sample Output 2
// -4
// Explanation 2
// If the expression is converted into an infix expression, it will be 2 + (3 * 1) – 9 = 5 – 9 = -4.

function postfixExpression(exp){
    let stack = [];
    //split the string by space so that we can get each character in an array
    const token = exp.split(' ');
    //iterate over the array
    for(let i=0;i<token.length;i++){
        //if is a number
        if(!isNaN(token[i])){
            //convert it into integer and push into stack
            stack.push(parseInt(token[i]));
        }
        //as soon we found any operator
        else{
            //pop the last two numbers from the stack and store them
            b = stack.pop();
            a = stack.pop();

            let result;
            //switch case for handling various operations
            switch(token[i]){
                case '+': result = a+b;
                break;
                case '-':result = a-b;
                break;
                case '*':result = a*b;
                break;
                case '/': result = a/b;
                break;
            }
            //lastly push the result into stack
            stack.push(result);
        }
    }
    //the final result will be at the top of the stack so pop it and return the poped element
    return stack.pop();
}
let exp = "2 3 + 5 *"
console.log(postfixExpression(exp));