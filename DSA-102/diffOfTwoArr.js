// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:
// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

// Example 1:
// Input: nums1 = [1,2,3], nums2 = [2,4,6]
// Output: [[1,3],[4,6]]
// Explanation:
// For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are 
// not present in nums2. Therefore, answer[0] = [1,3].
// For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are 
// not present in nums2. Therefore, answer[1] = [4,6].
// Example 2:
// Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
// Output: [[3],[]]
// Explanation:
// For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is 
// only included once and answer[0] = [3].
// Every integer in nums2 is present in nums1. Therefore, answer[1] = [].

function findDifference(nums1,nums2){
    let mp1 = new Map();
    let mp2 = new Map();
    let answer = [];
    //storing the element of num1 in first map
    for(let i=0;i<nums1.length;i++){  //O(n)
        mp1.set(nums1[i],i);
    }
    //storing the element of num2 in second map
    for(let i=0;i<nums2.length;i++){   //O(m)
        mp2.set(nums2[i],i);
    }
    //iterate over the keys of first map
    let diff1 = [];
    for(ele of mp1.keys()){ //O(n)
        //checking if the key of first map is not present in second map
        if(!mp2.has(ele)){
            //then push it into diff1
            diff1.push(ele);
        }
    }
    //push the diff1 into answer array
    answer.push(diff1);
    //iterate over the keys of second map
    let diff2 = [];
    for(ele of mp2.keys()){  //O(m)
         //checking if the key of second map is not present in first map
        if(!mp1.has(ele)){
            //then push it into diff2
            diff2.push(ele);
        }
    }
     //push the diff2 into answer array
    answer.push(diff2);
    //return the answer array
    return answer;
}
let nums1 = [1,2,3], nums2 = [2,4,6];
console.log(findDifference(nums1,nums2));

//so time complexity will be O(n+m) and sc will also O(n+m)