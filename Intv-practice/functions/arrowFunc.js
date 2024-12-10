//Arrow Function -> An arrow function or lambda expression is a shorter and concise way of creating 
//                  functions in javascript.arrow functions don't have its own this, argument and super. 
//                  They can not be used as constructor.

const arrowFunc = (a,b)=>a+b;
console.log(arrowFunc(5,4));

//First class function -> first class functions in javascript are first class objects. They are treated like
//                        any other variables.They can be passed as an argument of other function, can be
//                        returned by a function and can be assigned to a variable.

// Assigning a function to a variable
const greet = function(name) {
    return `Hello, ${name}!`;
  };
console.log(greet("Prachi"));

//First order function -> first order function is a function that does not take another function as an argumnet
//                        and does not return a function as its return value

const firstOrderFunc = () => console.log("First order function");
firstOrderFunc();

//Higher order function -> higher order function is a function that accepts a function as an argumnet or 
//                         return a function as its return value.
function greetings(){
    return "hello, good morning.";
}
function higherOrderFunc(greetings){
     return greetings;
}
console.log(higherOrderFunc(greetings()));