function swap(arr,a,b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
function reverseVowels(s) {
    //take vowel array
    let vowels = ['a','e','i','o','u','A','E','I','O','U'];
    //because strings are immutable so converting it into array
    let arr = s.split('');
    let left = 0, right = arr.length-1;
    //loop through the entire array
    while(left<right){
        //check if left and right both has vowels
        if(vowels.includes(arr[left]) && vowels.includes(arr[right])){
            //swap left and right element
            swap(arr,left,right);
            left++;
            right--;
        }
        //else if only left has vowel
        else if(vowels.includes(arr[left])){
            //then decrement right
            right--;
        }
        //otherwise: only right has vowel so increment left
        else{
            left++;
        }
    }
    //lastly join the array to get back the string and return
    return arr.join('');
};
console.log(reverseVowels('IceCreAm'));

//here time complexity is O(n) and SC is O(n)