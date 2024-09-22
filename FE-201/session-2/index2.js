// Problem Description
// In Mathematics and Cryptography, combinatorics plays a vital role especially Permutations and 
// Combinations
// Design a class (or constructor function) in Javascript that can calculate the number of 
// Permutations and Combinations given the value of N (Total Items) and
// R(the number of items to be selected). It should have the following methods
// factorial(num) - method to calculate factorial of a number num
// findCombinations(N, R) - method to calculate the number of combinations of N with R according 
//                          to the formula given below. Returns a single number
// findPermutations(N, R) - method to calculate the number of permutations of N with R according to 
//                          the formula given below. Returns a single number.
// NOTE: R is always strictly less than N else the answer is 0.

class Combinatorics{
    factorial(num){
        if(num<=1){
            return num;
        }
        let f=1;
        for(let i=2;i<=num;i++){
            f = f*i;
        }
        return f;
    }
    findCombination(N,R){
        if(R>=N) return 0;
        return this.factorial(N)/(this.factorial(R)-this.factorial(N-R));
    }
    findPermutations(N, R){
        if(R>=N) return 0;
        return this.factorial(N)/this.factorial(N-R);
    }
}
let obj = new Combinatorics();