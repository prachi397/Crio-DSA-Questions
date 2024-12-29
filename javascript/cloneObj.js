const obj = {
    name:"Prachi",
    age:22,
    address:{
        city:"Deoband",
        state:"Uttar Pradesh",
    },
    profession: function(name){
        console.log(`hi ${name}, I am an engineer.`);
    }
}
// let person1 = obj;
// person1.name = "Anna";
// console.log(obj);
// console.log(person1);

//shallow cloning
// let person2 = Object.assign({},obj);
// person2.address.city = "delhi";
// console.log(person2);
// console.log(obj);

//so we used deep copy
let convertObj = JSON.stringify(obj);  //it removes functions and dates
let person3 = JSON.parse(convertObj);
// person3.address.city = "delhi";
// console.log(person3);
console.log(obj);

//so we will write our own code
function deepCopyFunction(obj){
    let destination = {};
    function deepCopy(source,destination){
        for(key in source){
            if(typeof(source[key]) !== 'object' || source[key] === null){
                destination[key] = source[key];
            }else if(Array.isArray(source[key])){
                destination[key] = [];
                deepCopy(source[key],destination[key]);
            }else{
                destination[key] = {};
                deepCopy(source[key],destination[key]);
            }
        }
    }
    deepCopy(obj,destination);
    return destination;
}
let person4 = deepCopyFunction(obj);
person4.address.city ="delhi";
person4.profession = function greet(){
    console.log("Heloo world");
}
person4.profession();
console.log("deep copy:",person4);
console.log(obj);