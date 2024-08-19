// Problem Description
// Implement the function findSeatNumber() that Accepts two arrays of strings arr1 and arr2 as arguments
// arr1 is a list of names of people standing in a queue. Person standing in front of 
// "Mridula" (element before "Mridula”) in the queue is her friend.
// arr2 is a list where the index represents a seat number and the value is the name of the person 
// in that seat.
// Returns a number
// the seat number of Mridula’s friend.
// -1, if Mridula’s friend does not have a seat.

// Sample Input --> ["Raghu", "Goli", "Farhat", "Mridula", "Rahul"]
//                  ["Mridula", "Raghu", "Goli", "Farhat"]
// Sample Output --> 3

function findSeatNumber(arr1, arr2) {
    let friend;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === 'Mridula') {
            friend = arr1[i - 1];
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] === friend) {
            return i;
        }
    }
    return -1;
}
console.log(findSeatNumber(["Raghu", "Goli", "Farhat", "Mridula", "Rahul"], ["Mridula", "Raghu", "Goli", "Farhat"]));

//sample test case
if (findSeatNumber(["Raghu", "Goli", "Farhat", "Mridula", "Rahul"], ["Mridula", "Raghu", "Goli", "Farhat"]) !== 3)
    console.log("Test fails: Expected 3 for input arr1 = ['Raghu', 'Goli', 'Farhat', 'Mridula', 'Rahul'] and arr2 = ['Mridula', 'Raghu', 'Goli', 'Farhat']");
else
    console.log("Sample test case for input arr1 = ['Raghu', 'Goli', 'Farhat', 'Mridula', 'Rahul'], and arr2 = ['Mridula', 'Raghu', 'Goli', 'Farhat'] passed!");