// Problem Description
// Given a list of meeting time intervals, you have to find the minimum number of rooms required to 
// organize all the meetings.

// Sample Input --->
// 3
// 0 20
// 5 10
// 10 15

// Sample Output --->
// 2

// Explanation --->
// One room can host the 1st meeting (0-20) and the other room can host both the 2nd meeting (5-10) 
// and 3rd meeting (10-15), one after the other.
// So, only 2 rooms are required if total for the 3 meetings.

function meetingRooms(meetings) {
    let start = [], end = [];
    //separate stating and ending points and store them in array
    for(let i=0;i<meetings.length;i++){
        start.push(meetings[i][0]);
        end.push(meetings[i][1]);
    }
    //sort both the start and end array
    start.sort((a,b)=>a-b);
    end.sort((a,b)=>a-b);
    
    let room=0, endIdx = 0;
    //loop through the arr
    for(let i=0;i<meetings.length;i++){
        // if start less than end then add room
        if(start[i]<end[endIdx]){
            room++;
        }else{
            endIdx++;
        }
    }
    return room;
}
console.log(meetingRooms([[0,20],[5,10],[10,15]]));