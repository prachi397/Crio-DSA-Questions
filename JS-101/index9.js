// Problem Description
// A triangle is a shape with three sides and three corners. An equilateral triangle is a type 
// of triangle that has all three sides of the same length. In addition, all three interior angles of
// an equilateral triangle are equal to 60 degrees.
// Implement a function isEquilateralType()
// Accepts three sides of a triangle as number arguments side1, side2, and side3
// Returns a boolean true, if all the sides are equal
// false, otherwise

function isEquilateralType(side1,side2,side3){
   if(side1 === side2){
    if(side2 === side3){
        return true;
    }else{
        return false;
    }
   }else{
    return false;
   }
}
console.log(isEquilateralType(5,5,5))

//sample test case
if (isEquilateralType(1, 1, 1) !== true)
    console.log("Test fails: Expected true for input side1 = 1, side2 = 1 and side3 = 1");
else
    console.log("Sample test case for input side1 = 1, side2 = 1 and side3 = 1 passed!");