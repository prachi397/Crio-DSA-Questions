// Problem Description
// You are given two strings, a main string S, and a pattern P. You have to find the starting indices of
// the anagrams of P in S.
// Anagrams are permutations of a string. For P="abc”, its anagrams are abc,acb,bca,bac,cba,cab.
// Note that indexing starts at 0.
// Input format
// There is one line of input, containing two space-separated strings S and P.
// Output format
// First-line should contain the number of such starting indices.
// Next line should contain the indices in increasing order separated by a space.

// Sample Input-->
// aaba ab
// Sample Output-->
// 2
// 1 2
// Explanation-->
// The anagrams of pattern "ab" are “ab” and “ba”. These are present at indices 1 and 2 of the input string “aaba”.

// Sample Input -->
// bacdgabcda abcd
// Sample Output -->
// 3
// 0 5 6
// Explanation -->
// The anagrams of "abcd" can be seen as “bacd” at index 0, “abcd” at index 5 and “bcda” at index 6.

function compareMaps(mp1, mp2) {
  if (mp1.size !== mp2.size) {
    return false;
  }
  for (const [key, val] of mp1) {
    if (mp2.get(key) !== val) {
      return false;
    }
  }
  return true;
}
function findAllAnagramsInAString(s, p) {
  let ans = [];
  //get the frequency of each character of p
  let mp1 = new Map();
  for (let i = 0; i < p.length; i++) {
    mp1.set(p[i], (mp1.get(p[i]) || 0) + 1);
  }
  //check in the entire string s if we have same set of characters or not
  let mp2 = new Map();
  let i = 0,
    j = 0;
  while (j < s.length) {
    mp2.set(s[j], (mp2.get(s[j]) || 0) + 1);
    if (j - i + 1 === p.length) {
      if (compareMaps(mp1, mp2)) {
        ans.push(i);
      }
      if (mp2.get(s[i]) === 1) {
        mp2.delete(s[i]);
      } else {
        mp2.set(s[i], mp2.get(s[i]) - 1);
      }
      i++;
    }
    j++;
  }
  return ans;
}
console.log(findAllAnagramsInAString("bacdgabcda", "abcd"));
