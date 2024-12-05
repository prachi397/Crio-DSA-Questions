// Problem Description
// Count the number of prime numbers less than a non-negative number, n.

// Sample Input --->
// 10

// Sample Output --->
// 4

// Explanation --->
// There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

//helper function to check if a number is prime or not
function isPrime(n){
//0 and 1 are not prime numbers so always start the loop from 2
   for(let i=2;i*i<=n;i++){
    if(n%i === 0){
        return false;
    }
   }
   return true;
}

function countPrimes(n){
    let count = 0;
    for(let i=2;i<=n;i++){
        if(isPrime(i)){
            count++;
        }
    }
    return count;
}
console.log(countPrimes(10));