// Problem Description
// Given a string, write a program to check if it consists of equal number of vowels and consonants.
// Input format
// First line contains an string str consisting of lowercase english alphabets.
// Output format
// Return true if the string contains equal number of vowels and consonants else return false.

// Sample Input --->
// ab

// Sample Output --->
// true

function equalVowelsAndConsonants(str) {
  let vowels = 0,
    consonants = 0;
  let vowelList = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    if (vowelList.includes(str[i].toLowerCase())) {
      vowels++;
    } else {
      consonants++;
    }
  }
  return (vowels === consonants);
}
console.log(equalVowelsAndConsonants("abc"));
