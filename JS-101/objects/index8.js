// Problem Description
// Implement the function copy() that Accepts two arguments an object data and a string str
// Copies the input object data to another object data_copy
// Updates the value of the name property in the data_copy object to the input string str
// Returns a boolean true, if the input object data is equal to the copied object data_copy
// false, otherwise

function copy(data, str) {
    let data_copy = { ...data };
    data_copy.name = str;
    if (data === data_copy) {
        return true;
    } else {
        return false;
    }
}
console.log(copy({ name: "Kevin", age: 40 }, "Allen"));

//sample test case
if (copy({ name: "Kevin", age: 40 }, "Allen") !== false)
    console.log("Test fails: Expected false for input data = {name: 'Kevin', age: 40 } and str = 'Allen'");
else
    console.log("Sample test case for input data = {name: 'Kevin', age: 40 } and str = 'Allen' passed!");
