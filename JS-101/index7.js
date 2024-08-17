// Problem Description
// The cube of a number is the product obtained by multiplying the number by itself three times.
// Implement the function findCube() that
// Accept a number argument a
// Returns the cube of that number

const findCube=(a)=>{
    return a**3;
}
console.log(findCube(3));

//sample test case
if (findCube(3) !== 27)
    console.log("Test fails: Expected 8 for input a = 3");
else
    console.log("Sample test case for input a = 3 passed!");

