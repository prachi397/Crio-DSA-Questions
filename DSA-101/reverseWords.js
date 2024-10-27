// Problem Description
// A word is defined as a sequence of non-space characters. The words in s will be separated by at least 
// one space.
// Return a string of the words in reverse order concatenated by a single space.
// Note that s may contain leading or trailing spaces or multiple spaces between two words.
// The returned string should only have a single space separating the words.
// Do not include any extra spaces.
// Input format
// String s.
// Output format
// The function should return a string of the words in reverse order concatenated by a single space.
// Sample Input -->
// hello world
// Sample Output -->
// world hello

function reverseWords(str){
    let arr = [];
    word = '';
    for(let i=0;i<str.length;i++){
        if(str[i]==' '){
            arr.push(word);
            word='';
        }
        else{
            word += str[i];
        }
    }
    //pushing the last word into array
   arr.push(word);

   //reverse the array and store the words in ans string
   let ans = '';
   for(let i=arr.length-1;i>=0;i--){
    ans += arr[i] +" ";
   }
   return ans;
}
console.log(reverseWords("hello world Prachi Panwar"));