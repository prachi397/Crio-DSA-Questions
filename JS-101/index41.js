// Problem Description
// Implement the function greeting() that Accepts a string argument day indicating a day of the
// week (eg: "Monday", “Sunday”)
// Implements an inner function say() inside it, that
// Returns a string in the format "Today is: day" (eg: If day is "Sunday", it must return 
// "Today is: Sunday")
// Returns the inner function

function greeting(day){
    function say(){
        return `Today is: ${day}`;
    }
    return say();
}
console.log(greeting("Monday"));