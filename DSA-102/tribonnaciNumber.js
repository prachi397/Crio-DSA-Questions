// The Tribonacci sequence Tn is defined as follows: 
// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
// Given n, return the value of Tn.

// Example 1:
// Input: n = 4
// Output: 4
// Explanation:
// T_3 = 0 + 1 + 1 = 2
// T_4 = 1 + 1 + 2 = 4
// Example 2:
// Input: n = 25
// Output: 1389537

function tribonacci(n){
    //if n is 0 the tribonacci number will always be 0
    if(n==0) return 0;
     //if n is 1 or 2 the tribonacci number will always be 1
    if(n === 1 || n === 2) return 1;
    let t0 = 0, t1 = 1, t2 = 1;  //take the predefined tribonnaci values

    //iterate from 3 to n because we already knew the first 3 tribonnaci numbers
    for(let i=3;i<=n;i++){
        let nextNum = t0+t1+t2;  //get the next number of the series
        //shift all the three numbers by one position next
        t0 = t1;
        t1 = t2;
        t2 = nextNum;
    }
    //finnaly return the last number of the sequence
    return t2;
}
console.log(tribonacci(25));

//here tc will be O(n) and Sc O(1)