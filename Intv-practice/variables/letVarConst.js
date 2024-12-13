//1. let variable --> let statement decalare a local block scoped variable. The variables declared with let
//                 can only be acessed within the block they are declared. let variables can not be redeclare.
//                 let varibales are avaible since the beigining of javascript.
let count = 10;
if(count === 10){
    let count=20;
    console.log(count);
}
console.log(count);

//2. var variable --> variables declared with var variable has function scope. They can be accessed anywhere in
//                 code. Variables declared with var keyword can be redeclare and reinitialized.

var name = "Prachi";
console.log(name);
var name = "Annie";  //redeclaration
console.log(name);
name ="Prachi Panwar"; //reinitialization
console.log(name);

//variables declared using var can be hoisted and they return undefined if want to access them
console.log(color);
var color = "red";

//variables declared using let and const gives reference error when we try to access them before their
//declaration as they go in temporal dead zone. let and const variables are introduced with javscript 
//ES6 features.

// console.log(age);
// let age = 15;
// const age = 22;

//3. const variables --> variables declared using const has block scope. once the value is initialized
//                       to a const variable, it can never be change. These variables can not be
//                       redeclare and reinitialize.
{
const pi = 3.14;
//pi = 4; --> gives type error assignment to a constant variable
console.log(pi);
}
//console.log(pi); //--> it will give reference error

//how to redeclare variables in a switch block without an error
let counter = 0;
switch (counter){
    case 0 :{
        let name="Prachi";
        console.log(name);
        break;
    }
    case 1:{
        let name="Anna";
        console.log(name)
        break;
    }
}
//Hoisting -> Hoisting is a mechanism where variable and function declaration moves to the top of their
//            containing scope.Javascript only hoist declarations not initialisation.

//Temporal Dead Zone -> Temporal dead zone is a specific period or area of a block where the is inaccessible
//                      untill it is initialized with a value. This behaviour occurs when a variable is
//                      declared using let or const keyword.

function TDZ(){
    // console.log(counter1); // it will give reference err
    console.log(counter2); // it will give undefined
    let counter1 =5;
    var counter2 = 10;
}
TDZ();

//scope -> scope in javascript is the accessibility of variables, functions, objects in some particular
//         part of our code during runtime. In other words we can say that scope determines the 
//         visibilities of variables. functions and objects in a particular part/area of our code.

//Service Worker -> A service worker is basically a script (javascript file), which runs in the background
//                  seperate from the web page and provide features that do not required any user interaction.
//                  Some of the major features of service worker are Rich offline experiecnes, periodicly
//                  background syncs, push notifications, handle network requests and manage a cache of 
//                  responses.
// Manipulate DOM using Service Worker -> It can not directly manipulate DOM but it can communicate with
//                                        the pages it controls, by responding to message sent via PostMessage
//                                        interface and those pages can manipulate the DOM.
// How do you reuse information across service worker restarts?
// The problem with service worker is that it gets terminated when not in user and restart again when it
// requires, so we can not rely on global state within a service worker's onfecth and onmessage handlers.
// In this case, service worker will have access to indexedDB API in order to persist and reuse information
// across restarts.

// IndexedDB API -> IndexedDB is a low-level api for client-sdie storage of larger amount of structured data,
//                  including files/blobs. This API uses indexes to enable high performance searches
//                  of this data.

//Web Storage -> Web storage is an api that provides a mechanism by which browser can store data as a 
//               key-value pair locally within the browser in a more in concise manner than using cookies. 
//               web storage provides two mechanism to store data on client side :
//1. Local Stroage -> Local Storage allows us to store data in the browser with no-expireation time. The
//                    data is stored in local storage remains available even the browser is closed or 
//                    reopened, or when the user navigates to another pages. The data is domain specific that
//                    means data is accessible only on the same domain and Maximum storage capacity is 
//                    approximately 5–10 MB (varies by browser).

// //store the data in local storage
// localStorage.setItem({"name":"PrachiPanwar"});
// //get the data from local storage
// console.log("local storage: ", localStorage.getItem("name"));
// //remove data
// localStorage.removeItem("name");
// //clear all the data
// localStorage.clear();

//2. Session Storage -> Session storage is temporary storage mechanism that stores data only for the duration
//                      of page session, once the browser tab is closed the data gets cleared.
//                      Data persist only within the current tab or window.
//                      Data is deleted when the tab is closed.
//                      Maximum storage capacity is (5-10 MB).