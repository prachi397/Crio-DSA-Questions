// Problem Description
// A fundamental principle of functional programming is to explicitly declare dependencies, 
// which entails passing any necessary variables or objects directly into a function as an 
// argument if it relies on them.
// This principle has several positive outcomes. It simplifies the testing process for the 
// function, ensures clear identification of its required input, and eliminates any external 
// dependencies within your program.
// When you follow this principle, it can make you feel more certain when you make changes to 
// your code, such as modifying, deleting, or adding new code. You will have a better understanding 
// of what can be altered and what should not be changed, and you can easily identify areas where
// errors could occur.

// Implement the function increment so that it returns the value of argument constValue 
// increased by one without changing the value of constValue.

// Sample Input 1 --->
// 11
// Sample Output 1 --->
// 12
// Explanation --->
// In the above example, the required output corresponding to n = 11 is 12.



function increment(constValue) {
    return constValue+1;
}

if (increment(11) !== 12)
    console.log("Test fails: Expected 12 for input n = 11");
else
    console.log("Sample test case for input n = 11 passed!");

if (increment(7) !== 8)
    console.log("Test fails: Expected 8 for input n = 7");
else
    console.log("Sample test case for input n = 7 passed!");