// Problem Description --->
// You are given a string which comprises lower case alphabets (a-z), upper case alphabets (A-Z), numbers, (0-9)
// and special characters like !,-.; etc.
// You are supposed to find out which character occurs the maximum number of times and the number of its
// occurrence, in the given string. If two characters occur equal number of times, you have to output the
// character with the lower ASCII value.
// For example, if your string was: aaaaAAAA, your output would be: A 4, because A has lower ASCII value than a.

// Sample Input --->
// Statements are unique.

// Sample Output --->
// e 4

function mostFrequentDSA(text) {
  let mp = new Map();

  //get frequency of each characters
  for (const i of text) {
    let freq = mp.get(i) || 0;
    mp.set(i, freq + 1);
  }
  let str = "";
  let maxFrequency = 0;
  for (const [ele, freq] of mp) {
    let freq = mp.get(ele) || 0;
    //get the element with maximum frequency
    if (freq > maxFrequency) {
      str = ele;
      maxFrequency = freq;
    } 
    //if two characters having same frequency then return the lower ascii character
    else if (freq == maxFrequency) {
      if (ele < str) {
        str = ele;
      }
    }
  }
  return [str, maxFrequency];
}
console.log(mostFrequentDSA("Statements are unique"));
