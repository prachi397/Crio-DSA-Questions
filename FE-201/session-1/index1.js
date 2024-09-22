// An object can have a unique type of characteristic known as a method. Methods are like special 
// abilities that objects can perform, and they give objects different behaviors. 
// To illustrate, consider the example of an employee with a method.
// let employee =
// {
//    name: "Shourya",
//    department: "HR",
//    getName: function() {
//         return "The name of this employee is " + employee.name + ".";
//    }
// };
// employee.getName();
// The example has a function called getName that tells you the name of the employee. 
// The function uses the employee.name property to do this.
// You are given a function methodOnObject() with parameters name, age, college, city and country. 
// Complete the object person so that it has properties name,age,college,city, country and a method
// getCity()
// getCity() should return a string having the given name of person followed by "lives in" followed by
// the city in which that person lives.
// For example:
// methodOnObject("Nikhil Kumar", 21, "IIT Roorkee", "Roorkee", "India").getCity() should return 
// "Nikhil Kumar lives in Roorkee."

// Sample Input 1 ---->
// "Abhinav", 22, "IIT Patna", "Patna", "India"
// Sample Output 1 ---->
// Abhinav lives in Patna.

//person constructor
function Person(name, age, college, city,country) {
    this.name = name;
    this.age = age;
    this.college = college;
    this.city = city;
    this.country = country;
    this.getCity = function () {
        return `${this.name} lives in ${this.city}.`
    }
}
function methodOnObject(name, age, college, city, country) {
    // You need to implement this function.
    const person1 = new Person(name, age, college, city, country);
    return person1;
}

//sample test case
if ((methodOnObject("Abhinav", 22, "IIT Patna", "Patna", "India")
    .getCity() === "Abhinav lives in Patna."))
    console.log("Sample test case 1 passed!");
else
    console.log("Sample test case 1 failed!");

if ((methodOnObject("Ankur", 20, "IIT Kanpur", "Kanpur", "India")
    .getCity() === "Ankur lives in Kanpur."))
    console.log("Sample test case 2 passed!");
else
    console.log("Sample test case 2 failed!");