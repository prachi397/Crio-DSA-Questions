// ES6 Classes -> In javascript classes are syntatci sugar over javascript exsiting protype bases 
//                inheritance. Classes provides a cleaner and more structured way to work with objects
//                and inheritance in javascript.

//created a class person
class Person{
    //constructor function
    constructor(name){
        this.name = name
    }
    getDetails(){
        return "Hi, My name is "+ this.name;
    }
}
//person object
const personObj = new Person("Prachi Panwar");
console.log(personObj.getDetails());