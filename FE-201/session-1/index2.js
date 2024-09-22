// Problem Description
// You are given name,age, and occupation as arguments. You have to implement the function 
// constructorArgument which will return an object that contains these arguments as properties.
// You need to create a JavaScript constructor function that accepts a fixed number of 
// arguments (i.e name, age, and occupation) and store them as properties of an object.

// Sample Input 1
// "John", 25, "Engineer"
// Sample Output 1
// {name: "John", age: 25, occupation: "Engineer"}

//constructor
function Person(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
}
function constructorArgument(name, age, occupation) {
    let personObj = new Person(name, age, occupation);
    return personObj;
}
//sample test case
if ((constructorArgument("John", 25, "Engineer").name === 'John') &&
    (constructorArgument("John", 25, "Engineer").age == 25 &&
        (constructorArgument("John", 25, "Engineer").occupation === 'Engineer')))
    console.log("Sample test case for input name = John, age = 25 and occupation = Engineer passed!");
else
    console.log("Test fails: Expected {name: John, age: 25, occupation: Engineer}");