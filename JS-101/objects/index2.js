// Problem Description
// Implement a function getFullName() that
// Accepts three string arguments firstName, middleName, and lastName
// Returns an object with Key as fullName
// Value as a concatenated string of firstName, middleName, and lastName separated by a whitespace (" “)
// Sample Input --> "Alex", "P", "John"
// Sample Output --> { fullName: "Alex P John" }
function getFullName(firstName, middleName, lastName) {
    let obj = {
        fullName: `${firstName} ${middleName} ${lastName}`
    }
    return obj;
}
console.log(getFullName("Alex", "P", "John"));

//sample test case
if ((getFullName('Alex', 'P', 'John')).fullName !== 'Alex P John')
    console.log("Test fails: Expected { fullName: 'Alice P John' } for input firstName ='Alex', middleName = 'P', and lastName = 'John'");
else
    console.log("Sample test case for input firstName ='Alex', middleName = 'P', and lastName = 'John' passed!");