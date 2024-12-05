// Problem Description
// Write a program that takes a lowercase string str as input and checks if it contains all 26 alphabets 
// at least once.
// Given a string str, return true if str contains all 26 alphabets, or false otherwise.

// Sample Input -->
// thequickbrownfoxjumpsoverthelazydog

// Sample Output -->
// true

// Explanation -->
// str contains at least one of every letter of the English alphabet.

function allAlphabetsOrNot(str){
    let set = new Set();
    for(const char of str){
        //check if any character from a-z is present in the string
        if(/[a-z]/.test(char)){
            set.add(char);
        }
    }
    //at the end if size of set is 26 then return true otherwise return false
    return set.size === 26;
}

console.log(allAlphabetsOrNot("thequickbrownfoxjumpsoverthelazydog"));