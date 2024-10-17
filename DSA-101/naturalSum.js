// Problem Description
// You are given a positive integer 'N'. You have to find the sum of the first 'N' natural numbers.

function findNaturalSum(N){
    let sum=0;
    for(let i=1;i<=N;i++){
        sum += i;
    }
    return sum;
}
console.log(findNaturalSum(5))