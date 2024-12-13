// Clouser : A clouser is the combination of a function long with its lexical envrinment where the function
//           is declared. It is an inner function which can access the variables, paramenters and other
//           data of its outer parent function even the outer function has return its execution.

function greet(name){
    const sayMsg = (msg) =>{
        return `Hi ${name}, ${msg}`;
    }
    return sayMsg;
}
var myFunc = greet("Prachi");
console.log(myFunc("Good Morning"));