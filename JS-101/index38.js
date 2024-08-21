// Problem Description
// Implement the function calculateArea() that Accepts two number arguments len and bre denoting the 
// length and breadth respectively
// Returns the area of the rectangle But if any of the values of len or bre are negative then 
// convert them to their absolute values.
// Return "Not Possible", if any of the arguments are 0.

function calculateArea(len, bre) {
    if (len === 0 || bre === 0) {
        return "Not Possible";
    } else if (len < 0 || bre < 0) {
        return Math.abs(len * bre);
    } else {
        return len * bre;
    }
}
console.log(calculateArea(-3, -10));

//sample test case
if (calculateArea(2, 3) !== 6)
    console.log("Test fails: Expected 6 for input len = 2 and bre = 3");
else
    console.log("Sample test case for input len = 2 and bre = 3 passed!");