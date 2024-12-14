// Bubble sort comapares 2 adjacent elements and swap them according to the order.
// arr = [2,6,4,0,5]
//       2<6 = true, not swap
//       6<4 = false, swap(6,4) -> [2,4,6,0,5]
//       6<0 = false, swap(6,0) -> [2,4,0,6,5] -> swap(6,5)-> [2,4,0,5,6] and so on...
// here concept is after each iteration the largest element is added in the end of the array

function swap(arr,a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
function bubbleSort(arr, n) {
    //loop through n-1
  for (let i = 0; i < n-1; i++) {
    //loop till n-1-i -> because after ith iteration the last i elements will be sorted
    for (let j = 0; j < n-1-i; j++) {
        //check if the first element is greater than its next element
      if (arr[j] > arr[j + 1]) {
        //if true then swap both the elmenets
        swap(arr,j,j+1);
      }
    }
  }
  return arr;
}
console.log(bubbleSort([2, 6, 4, 0, 5], 5));

//Time complexity of bubble sort is O(n*n) and SC - O(1)
