// Problem Description
// Implement the function findSmallest() which Accepts three number arguments, a, b, and c
// Returns the smallest number out of all three

function findSmallest(a,b,c){
    if(a<b && a<c){
        return a;
    }else if(b<a && b<c){
        return b;
    }else{
        return c;
    }
}
console.log(findSmallest(0,1,2));

//sample test case
if (findSmallest(1,2,3) !== 1)
    console.log("Test fails: Expected 1 for input a = 1, b = 2 and c = 3");
else
    console.log("Sample test case for input a = 1, b = 2 and c = 3 passed!");