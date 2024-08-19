// Problem Description
// Create a function modifyNestedObject() that
// Accepts two arguments a nested object obj that indicates an address and a number num 
// that indicates the new street number for the address.
// Returns the object obj after updating the streetNumber property with the value of num, 
// the streetNumber property is nested within the address property of the given object obj.

function modifyNestedObject(obj, num) {
    obj.address.streetNumber = num;
    return obj;
}
console.log(modifyNestedObject({ address: { streetNumber: 5 } }, 8));

//sample input
if (modifyNestedObject({ address: { streetNumber: 5 } }, 8).address.streetNumber !== 8)
    console.log("Test fails: Expected { address: { streetNumber: 8}} for input obj = { address: { streetNumber: 5 }}, and num = 8");
else
    console.log("Sample test case for input obj = { address: { streetNumber: 5 }}, and num = 8 passed!");