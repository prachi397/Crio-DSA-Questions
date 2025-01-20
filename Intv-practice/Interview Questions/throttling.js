//Throttling : Throttling is a techinque in javascript that is used to optimize the performance of web 
//             application by limiting the frequency at which a function is executing, it ensures that
//             a function should runs onyl once within the specified time interval. It is useful for optimizing
//             performance in scenarios when user continuous scroll, resize or rapidly clicking a button.

function throttle(fn,delay){
    let prev = 0;
    return function(...args){
        let date = new Date().getTime();
        if(date-prev>delay){
            prev = date;
            fn(...args);
        }
    }
}
const throttleFunc = throttle(()=>{
    console.log("Hello from throttling")
},3000);
throttleFunc();
throttleFunc();
setTimeout(() => {
    throttleFunc();
}, 3000);