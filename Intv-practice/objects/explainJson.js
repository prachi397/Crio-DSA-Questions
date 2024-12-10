// JSON is a text-based data format following javascript object syntax,It is used when we need to transmit
// data across network. It is baiscally a text file with .json extension.
//JSON Mehtods :
//1. Parsing -> it is used to convert a string into native object
let text = '{"name":"prachi","age":"22"}'; //json string
console.log(JSON.parse(text));

//2. Stringification -> it is used to convert native object into string, so that it can be transmitted
//                      across the network.
let obj = {name:"Annie", place:"DBD","age":22};
console.log(JSON.stringify(obj));