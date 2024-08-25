// Problem Description
// Implement the function getFullName that
// Accepts an array of objects arr as an argument that has properties firstname and lastname
// Returns an array with the full name of each object inside arr

function getFullName(arr) {
    let newArr = [];
    arr.map((ele) => {
        newArr.push(`${ele.firstname} ${ele.lastname}`);
    })
    return newArr;
}
let arr = [
    { firstname: "Robert", lastname: "Obrain" },
    { firstname: "Kevin", lastname: "Hart" },
    { firstname: "Dane", lastname: "Cobby" }
];

console.log(getFullName(arr));

//sample test case
if (getFullName([
    { firstname: "Robert", lastname: "Obrain" },
    { firstname: "Kevin", lastname: "Hart" },
    { firstname: "Dane", lastname: "Cobby" }
]).toString() != ["Robert Obrain", "Kevin Hart", "Dane Cobby"])
    console.log("Test fails: Expected output: ['Robert Obrain', 'Kevin Hart', 'Dane Cobby'] ");
else
    console.log("Sample test case passed!");