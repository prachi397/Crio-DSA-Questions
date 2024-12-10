//1. let variable --> let statement decalare a local block scoped variable. The variables declared with let
//                 can only be acessed within the block they are declared. let variables can not be redeclare.
//                 let varibales are avaible since the beigining of javascript.
let count = 10;
if(count === 10){
    let count=20;
    console.log(count);
}
console.log(count);

//2. var variable --> variables declared with var variable has function scope. They can be accessed anywhere in
//                 code. Variables declared with var keyword can be redeclare and reinitialized.

var name = "Prachi";
console.log(name);
var name = "Annie";  //redeclaration
console.log(name);
name ="Prachi Panwar"; //reinitialization
console.log(name);

//variables declared using var can be hoisted and they return undefined if want to access them
console.log(color);
var color = "red";

//variables declared using let and const gives reference error when we try to access them before their
//declaration as they go in temporal dead zone. let and const variables are introduced with javscript 
//ES6 features.

// console.log(age);
// let age = 15;
// const age = 22;

//3. const variables --> variables declared using const has block scope. once the value is initialized
//                       to a const variable, it can never be change. These variables can not be
//                       redeclare and reinitialize.
{
const pi = 3.14;
//pi = 4; --> gives type error assignment to a constant variable
console.log(pi);
}
//console.log(pi); //--> it will give reference error