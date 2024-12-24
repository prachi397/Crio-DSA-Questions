// Problem Description
// Given 2 strings S and T containing lowercase and '#' characters. You have to check whether these 2 
// strings are same or not when typed into an editor('#' being the backspace character).
// Note: Backspacing an empty string remains an empty string only.
// For eg. a#bc means bc, and a##bcd means bcd.
// Function definition
// You have to complete the given function. It accepts two parameters - the two strings, and returns a 
// boolean value, true if S and T are same and false if not.

// Sample Input 1
// 2
// as#sddff#
// aa#sddf
// a##b
// ab

// Sample Output 1
// true
// false

// Explanation
// In first test case both the strings become "asddf" when typed into an editor.
// In second test case the string becomes "b" and "ab" which are not equal.

//helper function
function createStr(s){
    let stack = [];
    //iterate over the string
    for(let i=0;i<s.length;i++){
        //if character is not # then push it into stack
        if(s[i] !== '#'){
            stack.push(s[i]);
        }
        //if it is # then pop
        else{
            stack.pop();
        }
    }
    //lastly join the stack and return the string
    return stack.join('');
}
function backspaceStringCompare(s, t) {
    //check after converting both the strings are equal or not
    return createStr(s) === createStr(t);
}
console.log(backspaceStringCompare("as#sddff#","aa#sddf"));