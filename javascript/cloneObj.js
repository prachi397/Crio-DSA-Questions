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

//flaten an array without using inbuilt method
let arr = [[1,2],[3,4,[5,6]],[7,8,9]];
function flatten(arr){
    let newArr = [];
    function innerFlat(arr){
        arr.forEach(ele => {
            if(Array.isArray(ele)){
                innerFlat(ele);
            }else{
                newArr.push(ele);
            }
        });
    }
    innerFlat(arr);
    return newArr;
}
console.log(flatten(arr));

//Find the first non-repeating character in a string
let str = "aabbccdee";
function findNonRepeatingChar(){
    let mp = new Map();
    for(let i=0;i<str.length;i++){
        mp.set(str[i],(mp.get(str[i])||0)+1);
    }
    for(const [key,value] of mp){
        if(value === 1){
            return key;
        }
    }
    return null;
}
console.log(findNonRepeatingChar(str));

//clouser
function Outer(a){
    function inner(b){
        return a+b;
    }
    return inner;
}
let funcCall = Outer(5);
console.log(funcCall(10));

//clouser with encapsulation
function bankAccount(accNo, name, balance){
    function showDetails(){
        console.log(`account number : ${accNo} name : ${name} and balance : ${balance}`);
    }
    function deposit(amount){
        balance += amount;
        showDetails();
    }
    return deposit;
}
let accData = bankAccount(123,"Prachi", 500);
accData(50);