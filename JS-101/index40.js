// Problem Description
// Aryan is a small kid and his favourite shape is the circle. Whenever he gets a number he tries to
// find the area of a circle whose radius is that given number.
// Implement the function findAreaofCircle() that
// Accepts a number argument r, representing the radius of the circle
// Returns a number representing the area of the circle with the given radius r
// Note : we need to use Math function here

function findAreaofCircle(r){
    return Math.PI * Math.pow(r,2);
}
console.log(findAreaofCircle(3));