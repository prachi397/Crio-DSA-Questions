// Problem Description
// You are given a list of words present in a book. Your younger brother is really curious to know the 
// K most frequent words in the book, you have to find them.
// Your answer should be sorted by frequency from highest to lowest. If two words have the same 
// frequency, then the word with the lower alphabetical order should come first.

// Input format --->
// There are three lines of input
// The first line contains N, which is the number of input strings.
// The second line contains N space separated input strings (S).
// The third line contains the value of K.
// Output format --->
// Print the K most frequent words present inside the book, each in a new line. If two words have the 
// same frequency, then the word with the lower alphabetical order should come first.

// Sample Input --->
// 1
// bus
// 1
// Sample Output --->
// bus
// Explanation --->
// In the given input, the frequency of "bus" is 1 and it is the 1st most frequent word.

// Sample Input --->
// 3
// car bus car
// 2
// Sample Output --->
// car
// bus
// Explanation --->
// In the given input, the frequency of "car" is 2, frequency of “bus” is 1.
// Since K = 2, both words are printed, with "car" being the most frequent, gets printed first.

function frequentWords(words, k) {
    const mp = new Map();
    //store the frequency of each word into map
    for(let i=0;i<words.length;i++){
        mp.set(words[i],(mp.get(words[i])||0)+1);
    }
    //convert this map into array to sort it
    const arr = Array.from(mp.entries());
    //sort this array 
    arr.sort((a,b)=>{
        //if frequecy of two words is equal
        if(a[1] === b[1]){
            return a[0].localeCompare(b[0]); //sort them into lexicography order
        }
        //otherwise sort them based on frequency
        return b[1]-a[1]}
    );
    //last;y return the first elements of 2d array till k
    return arr.slice(0,k).map((item)=>item[0]);
}
console.log(frequentWords(["car","bus","car","bus"],2));

//lets not use so many built in function
function frequentWordsNew(words, k) {
    const mp = new Map();
    //store the frequency of each word into map
    for(let i=0;i<words.length;i++){
        mp.set(words[i],(mp.get(words[i])||0)+1);
    }
    const arr = []
    //convert this map into array to sort it
   for(const entries of mp){
    arr.push(entries);
   }
    //sort this array (custom sort function)
    arr.sort((a,b)=>{
       if(a[1]>b[1]) return -1;
       else if(b[1]<a[1]) return 1;
       else{
        if(a[0]<b[0]) return -1
        else return 1;
       }
    }
    );
    const result = [];
    //lastly push the k elements into result
    for(let i=0;i<k;i++){
        result.push(arr[i][0]);
    }
    return result;
}
console.log(frequentWordsNew(["car","bus","car","bus"],2));

//here tc is O(nlogn) and sc is O(n)