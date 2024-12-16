// Problem Description
// An interval is a range, with a starting value and ending value. [1, 3] indicates elements 1,2,3 and so on.
// Given a collection of intervals, merge all overlapping intervals. The result should only have mutually 
// exclusive intervals - meaning that no number should be common between two intervals, in the result.
// Note: The merged intervals should be printed in increasing order of start value.

// Input format
// There are N+1 lines of input.
// First line contains N, the number of intervals
// Next N lines contain 2 space separated integers A and B, which represent the start and end of an interval

// Output format
// For the X merged intervals, print each interval (the start and end being space separated) on a separate line

// Sample Input --->
// 4

// 1 3
// 2 6
// 8 10
// 15 18

// Sample Output --->
// 1 6
// 8 10
// 15 18

// Explanation --->
// Since intervals [1 3] and [2 6] overlap, merge them into [1 6]

function mergeIntervals(n, intervals){
    //sort the intervals according to the starting point of intervals
    intervals.sort((a,b)=>a[0]-b[0]);
    let ans = [];
    //initialize the first element of the first arr as starting and second element of first arr as ending poin
    let starting = intervals[0][0];
    let ending = intervals[0][1];
    //loop through the entire array from 1 to length of the interval
    for(let i=1;i<intervals.length;i++){
        //compare the starting points with the previous end point, if is is lesser
        if(intervals[i][0]<=ending){
            //update the ending with the next ending interval
            ending = Math.max(ending,intervals[i][1]);
        }
        //it starting interval is not lesser than the previous ending interval then we need to push
        // all the intervals in answer array
        else{
            //push array of starting and ending intervals in array
            ans.push([starting,ending]);
            //update starting and ending intervals
            starting = intervals[i][0];
            ending = intervals[i][1];
        }
    }
    //finally push the array of starting and ending intervals in answer array
    ans.push([starting,ending]);
    return ans;
}
let arr = [[1,3],[2,6],[8,10],[15,18]];
console.log(mergeIntervals(4,arr));