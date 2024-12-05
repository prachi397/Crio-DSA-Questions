// Problem Description
// You are given a list of words present in a book. Find out the count of unique words present in that book.

// Sample Input -->
// 7
// Java
// is
// great
// Grails
// is
// also
// great

// Sample Output -->
// 5

function uniqueWords(n,s){
    let set = new Set();
    for(let i=0;i<n;i++){
        set.add(s[i]);
    }
    return set.size;
}
let s = ["java","is","great","Grails","is","also","great"]
console.log(uniqueWords(7,s));