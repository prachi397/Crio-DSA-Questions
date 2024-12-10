//different ways to create an object

//1. Object literal syntax --> comma separate set of name-value pair
let obj1 = {
  name: "Prachi",
  age: 22,
};
console.log(obj1);

//2. using Object constructor
let obj2 = Object(); //this will create empty object
//add values to the object
obj2.vehical = "car";
obj2.color = "black";
console.log(obj2);

//3. create method -> Object.create method is used to create a object pass passing the specified prototype
//                    object and properties as arguments, this is helpful by creating new objects based on
//                    existing objects. the second argument is optinal.

let obj3 = Object.create(null); //creates a new object which has protype null
console.log(obj3);
//example of creating object using object.create
let vehical = { wheels: "4", fuelType: "Gasoline", color: "green" };
let carProps = {
  type: { value: "volkswagen", enumerable: true },
  model: { value: "golf", enumerable: true },
};
var car = Object.create(vehical, carProps);
console.log(Object.getPrototypeOf(car));
console.log(car);
console.log(car.wheels);

//4. create object using function construcotr -> this approach, creates any function and apply the new 
//                                               operator to create instance of object

function person(name){
    this.name = name;
    this.age = "22";
}
let obj4 = new person("Prachi Panwar");
console.log(obj4);

//5. Function constructor with protoype -> similar to function constructor but uses protype for thier 
//                                         properties and methods.
//create an empty function
function human(){}
human.prototype.name = "Annie";
let obj5 = new human();
console.log(obj5.name);

//6. Object.assign() -> it is used to copy all the properties of one or more source objects to a 
//                      target object.

let orgObj = {company:'abc groups'};
let carObj = {name: 'Toyato'};
let obj6 = Object.assign({color:'black'},orgObj,carObj);
console.log(obj6);

//7. using ES6 class ->
class Persona{
    constructor(name){
        this.name = name;
    }
}
let obj7 = new Persona("Prachi");
console.log(obj7);