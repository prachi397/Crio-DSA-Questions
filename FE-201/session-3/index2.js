// Problem Description
// Functional programming emphasizes the principle of immutability, where avoiding changes is key 
// to preventing bugs. By ensuring that functions do not modify function arguments or global 
// variables, it becomes easier to prevent potential issues.
// In functional programming, modifying or altering variables or objects is referred to as mutation,
// which results in side effects. Ideally, functions should be designed as pure functions that do 
// not cause any side effects.
// Let's strive to adopt this discipline and refrain from modifying any variables or objects in 
// our code.

// In the function increment, return the value of the global variable constValue increased by num
// which is passed as a parameter in the function increment
// Note: Your function increment should not change the value of constValue (which is 11).

// Sample Input 1 ----->
// 3
// Sample Output 1 ------>
// 14
// Explanation ----->
// The sum of 11 and 3 is equal to 14.

let constValue = 11;

function increment(num) {
    return constValue+num;
}

if (increment(3) !== 14)
  console.log("Test fails: Expected 14 for num = 3");
else
  console.log("Sample test case passed for num = 3!");

if (increment(4) !== 15)
  console.log("Test fails: Expected 15 for num = 4");
else
  console.log("Sample test case passed for num = 4!");