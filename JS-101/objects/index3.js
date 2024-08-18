// Problem Description
// Implement the function updateProperty() that
// Accepts three arguments an object obj, a string representing a property name propName, and a string 
// str, Updates the property propName of the input object obj with the value str
// Returns the updated property

function updateProperty(obj, propName, str) {
    obj[propName] = str;
    return obj[propName];
}
console.log(updateProperty({ firstName: 'Alex' }, 'firstName', 'John'));

//sample test case
if ((updateProperty({ firstName: 'Alex' }, 'firstName', 'John')) !== 'John')
    console.log("Test fails: Expected 'John' for input  obj = { firstName: 'Alex' }, propName = 'firstName', str = 'John'");
else
    console.log("Sample test case for input obj = { firstName: 'Alex' }, propName = 'firstName', str = 'John' passed!");
