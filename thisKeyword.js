function sum(a, b) {
  console.log(this === global);
  this.myNumber = 20;
  console.log(a + b);
}
// sum(1,2);
// console.log(global.myNumber);

//here this is euqal to the global object but in strict mode this refers to undefined so if we do
//
function multiply(a, b) {
  "use strict";
  console.log(this === global);
  console.log(a * b);
}
// multiply(5,5);

//this in context of inner functiom
const numbers = {
  numberA: 5,
  numberB: 10,

  sum: function () {
    console.log(this === numbers); // => true
    function calculate() {
      // this is window or undefined in strict mode
      console.log(this === sum); // => false
      return this.numberA + this.numberB;
    }

    return calculate();
  },
};

numbers.sum();

//method invocation
const myObj = {
  method() {
    console.log(this);
  },
};
myObj.method();

//during indirect invaction
function MyFunction() {
  console.log(this);
}
const myContext = { value: "A" };
MyFunction.call(myContext);
MyFunction.apply(myContext);

//constructor invocation
function MyFunction() {
  console.log(this);
}

new MyFunction();

//this in arrow functions
const newObj = {
  method() {
    console.log(this === newObj); //true
    const callback = () => {
      console.log(this === newObj); //true
    };
    return callback();
  },
};
newObj.method();

//class and object
//creating class (blueprint)
class Book {
  constructor(title, author, publishedYear) {
    this.title = title;
    this.author = author;
    this.publishedYear = publishedYear;
  }
  //method
  bookDetails() {
    console.log(
      `title is ${this.title} written by ${this.author} and it is pulblished in ${this.publishedYear}`
    );
  }
}
//creating object (instance of class)
const obj = new Book("Harry Potter", "Prachi", 2016);
console.log(obj);
obj.bookDetails();

//call
const person1 = {
  name: "Alice",
  ageP: 26,
  greet: function () {
    console.log(`Hello, my name is ${this.name} and age is ${this.age}`);
  },
};
const person2 = {
  name: "Bob",
  age: 30,
};
person1.greet.call(person2); // Output: Hello, my name is Bob

//protype inheritence
let animal = {
  isAlive: true,
  eat: function () {
    console.log("Eating");
  },
};
let rabbit = Object.create(animal);
rabbit.hop = function () {
  console.log("Hopping");
};
rabbit.hop(); // Output: "Hopping"
rabbit.eat();
