//Memoization -> Memoization is a technique to increase the performance of the function by caching its 
//               previously computed results. Each time a function is called, its parameter are used to
//               index the cache.If the data is present then it is returned without executed the entire
//               function and if not present then the function is executed and then the result is added
//               to the cache.

const memoizedAddition = () =>{
    //create a cache map which stores parameter-result as key-value
    let cache = {};
    return(value)=>{
        //loop through the cache and check if value(parameter) is present
        if(value in cache){
            //if yes then return the value of that particular parameter
            console.log("Caching the value");
            return cache[value];
        }
        //if not present then compute the result and store it in the cache
        else{
            console.log("Calculating the result");
            let result = value+20;
            cache[value] = result;
            return result;
        }
    };
}
const addition  = memoizedAddition();
console.log(addition(20));  //it will compute the result
console.log(addition(20)); // it will return the previously calculated result