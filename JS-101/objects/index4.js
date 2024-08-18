// Problem Description
// Implement the function deleteProperty() that
// Accepts two arguments an object obj and a string representing a property name propName
// Returns the given object after deleting the property name propName from the object

function deleteProperty(obj, propName) {
    delete obj[propName];
    return obj;
}
console.log(deleteProperty({ firstName: 'Sachin', middleName: 'Ramesh', lastName: 'Tendulkar' }, 'middleName'));

//sample test case
if (
    deleteProperty(
        { firstName: "Sachin", middleName: "Ramesh", lastName: "Tendulkar" },
        "middleName"
    ).middleName !== undefined
)
    console.log(
        "Test fails: Expected { firstName: 'Sachin', lastName;'Tendulkar'} for input { firstName: 'Sachin', middleName: 'Ramesh', lastName:'Tendulkar'}, 'middleName'"
    );
else
    console.log(
        "Sample test case for input { firstName: 'Sachin', middleName: 'Ramesh', lastName:'Tendulkar'}, 'middleName' passed!"
    );