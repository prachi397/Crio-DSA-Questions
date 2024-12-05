// Problem Description
// Given a number n, you have to find the count of the numbers from 1 to n that are coprime to n.
// coprime numbers are the numbers whihc has highest common factor as 1
// Sample Input --->
// 9

// Sample Output --->
// 6

// Explanation
// Numbers coprime to 9 are: 1, 2, 4, 5, 7, 8

//function to find highest common factor i.e, gcd
function findGcd(a,b){
    if(b===0){
        return a;
    }
    return findGcd(b,a%b);
}

function coprimeNumbers(n){
    let gcd = n;
    let count=0;
    for(let i=0;i<n;i++){
        if(findGcd(gcd,i) == 1){
            count++;
        }
    }
    return count;
}
console.log(coprimeNumbers(9));