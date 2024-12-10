// The call, apply and bind methods are used in jaavscript to control the 'this' context. They are 
// particularly helpful when working with functions and objects where this keyword might not refer
// to the desired object.

//1. call() -> call method invokes a function with a given 'this' value and pass the argument
//             one by one (comma separated).
let emp1 = {firstName:"Prachi", lastName:"Panwar"};
let emp2 = {firstName:"Annie", lastName:"Maxwell"};
function invite(greeting1, greeting2){
    console.log(`${greeting1} ${this.firstName} ${this.lastName}, ${greeting2}`);
}
//call methods
invite.call(emp1, "Hello", "How are you?");
invite.call(emp1, "Hi", "Good Morning!");

//2. apply() -> apply is same as call, it also invokes a function with given 'this' and provide arguments 
//             as an array
invite.apply(emp1,['Good Morning',"What's up?"]);

//3. bind() -> bind method return a new function and allows to pass number of arugumets
let inviteEmp1 = invite.bind(emp1);
let inviteEmp2 = invite.bind(emp2);
inviteEmp1("Hi!", "Good Evening");
inviteEmp2("Hlo!", "Good Evening");