//1. Arrow Function -> An arrow function or lambda expression is a shorter and concise way of creating 
//                  functions in javascript.arrow functions don't have its own this, argument and super. 
//                  They can not be used as constructor.

const arrowFunc = (a,b)=>a+b;
console.log(arrowFunc(5,4));

//2. First class function -> first class functions in javascript are first class objects. They are treated like
//                        any other variables.They can be passed as an argument of other function, can be
//                        returned by a function and can be assigned to a variable.

// Assigning a function to a variable
const greet = function(name) {
    return `Hello, ${name}!`;
  };
console.log(greet("Prachi"));

//3. First order function -> first order function is a function that does not take another function as an argumnet
//                        and does not return a function as its return value

const firstOrderFunc = () => console.log("First order function");
firstOrderFunc();

//4. Higher order function -> higher order function is a function that accepts a function as an argumnet or 
//                         return a function as its return value.
function greetings(){
    return "hello, good morning.";
}
function higherOrderFunc(greetings){
     return greetings;
}
console.log(higherOrderFunc(greetings()));

//5. unary function -> function that accepts exactly one argument
const unaryFunc = (a) => console.log(a+10);
unaryFunc(5);

//6. currying functiom -> currying is the process of taking a function with multiple argument and turning 
//                        it into sequence of functions each having only a single argumnet. By using currying
//                        we convert n-ary function into unary function.

const curryingFunc = (a)=>(b)=>(c)=>a+b+c;
curryingFunc(1); //1+b+c
curryingFunc(1)(2); //1+2+c
console.log(curryingFunc(1)(2)(3));
//another example of function curring
function multiple(a){
  return function(b){
    return a*b;
  };
}
const multiplyOfTwo = multiple(2);
const multiplyOfFive = multiplyOfTwo(5);
console.log(multiplyOfFive);

//7. Pure function -> Pure function is a function where the return value is only determined by the argumnets
//                    passed to it without any side effects.If we run the same function with same arguments
//                    n number of times and in n places in the application then it will always returns
//                    the same value.

function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); 
console.log(add(2, 3));

//8. IIFE (Immediately Invoked Function Expression) -> IIFE is a javascript function that runs as soon as it is 
//                                                  defined. The primary reason to use an IIFE is to obtain 
//                                                  data privacy because any variables declared within the IIFE 
//                                                  cannot be accessed by the outside world. 

(function(){
  const msg = "Hello World!";
  console.log(msg);
})();

//encode url and decode url
let uri = "employee Details?name=john&occupation=manager";
//encode url
let encoded_uri = encodeURI(uri);
console.log(encoded_uri);

//decide url
let decoded_uri = decodeURI(encoded_uri);
console.log(uri);