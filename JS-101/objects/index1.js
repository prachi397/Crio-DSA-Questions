// Problem Description
// Create the function checkProperty() that
// Accepts two arguments an object obj and a string representing a property name propName
// Returns a boolean true, if the object obj has the property propName
// false, otherwise

function checkProperty(obj, propName) {
    if (obj.hasOwnProperty(propName)) {
        return true;
    } else {
        return false;
    }
}
console.log(checkProperty({ firstName: 'Alex', lastName: 'Powell' }, 'firstName'));

//sample test case
if ((checkProperty({ firstName: 'Alex' }, "firstName")) !== true)
    console.log("Test fails: Expected true for input obj = { firstName: 'Alex' }, and propName = 'firstName'");
else
    console.log("Sample test case for input obj = { firstName: 'Alex' }, and propName = 'firstName' passed!");