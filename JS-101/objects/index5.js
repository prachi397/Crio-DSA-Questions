// Problem Description
// Implement the function maxCapacityType() that
// Accepts an array of objects arr as an argument. Each object inside the array is a car that 
// has three properties color, type, and capacity.
// Returns a string representing the type of the car with maximum capacity.
//Sample Input --> 
let objArr = [
    {
        color: 'red',
        type: 'Station Wagon',
        capacity: 5
    },
    {
        color: 'green',
        type: 'Convertible',
        capacity: 2
    },
    {
        color: 'white',
        type: 'MiniVan',
        capacity: 4
    }
];
//Sample Output --> Station Wagon

function maxCapacityType(arr) {
    let maxCapacity = arr[0].capacity;
    let maxCapacityType = arr[0].type;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].capacity > maxCapacity) {
            maxCapacityType = arr[i].type;
        }
    }
    return maxCapacityType;
}
console.log(maxCapacityType(objArr));

//sample test case
if (maxCapacityType([{ color: 'Red', type: 'Station Wagon', capacity: 5 }, { color: 'Black', type: 'Sedan', capacity: 4 }]) !== 'Station Wagon')
    console.log("Test fails: Expected 'Station Wagon' for input arr = [{color: 'Red', type: 'Station Wagon', capacity: 5}, {color: 'Black', type: 'Sedan', capacity: 4}]");
else
    console.log("Sample test case for input arr = [{color: 'Red', type: 'Station Wagon', capacity: 5}, {color: 'Black', type: 'Sedan', capacity: 4}] passed!");
