// Debouncing : Debouncign is a technique that is used to optimize the performance of web application by controlling
//              the frequency at which the time consuming tasks are triggered. I fa task is triggered to often,
//              for example user types something or rapidly clicks on a button then it can lead to performance
//              issues so debouncing provides us solution by limiting how frequently a function can be executed.
//              In javascript debouncing is a mechanism which is used to optimize a web application performance 
//              by limiting that the time cunsuming tasks are executed only when neccessary, because javascript
//              is single threaded that means it can run only one task at a time, when certain actions are 
//              triggered to frequently (continuous scrolling and typing) then it can overload the browser and 
//              can cause performance issues.

function debounce(fn,delay){
    let timerId;
    return function(...args){
        clearTimeout(timerId);
        timerId = setTimeout(()=>{
            fn(...args);
        },delay);
    }
}
let debounceFunc = debounce(()=>{
    console.log("Hello debouncing")
},3000);
debounceFunc();
setTimeout(debounceFunc, 4000);