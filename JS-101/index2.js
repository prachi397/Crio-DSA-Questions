// Problem Description
// Create the function incrementNumber() that Accepts a number argument a
// Return the number after Incrementing it by 1

function incrementNumber(a){
    let incre = a+1;
    return incre;
}
//function call
console.log(incrementNumber(7));

//sample test case check
if (incrementNumber(2) !== 3)
    console.log("Test fails: Expected 3 for input a = 2");
else
    console.log("Sample test case for input a = 2 passed!");
