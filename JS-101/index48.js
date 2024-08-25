// Problem Description
// Implement the function getName() that
// Accepts three arguments, an array of strings names, number start, and number end
// Return the elements from start to end where the end index end is exclusive in the form of an array.

function getName(names, start, end) {
    return names.slice(start, end);
}
console.log(getName(["Ravi", "Faizan", "Kiran", "Shashwat", "Pulkit"], 2, 4));

//sample test case
if (
    JSON.stringify(getName(["Ravi", "Pulkit", "Kiran", "Aagam"], 2, 4)) !==
    JSON.stringify(["Kiran", "Aagam"])
)
    console.log(
        "Test fails: Expected ['Kiran', 'Aagam'] for input names = ['Ravi', 'Pulkit', 'Kiran', 'Aagam'], start = 2, end = 4"
    );
else
    console.log(
        "Sample test case for input names = ['Ravi', 'Pulkit', 'Kiran', 'Aagam'], start = 2, end = 4 passed!"
    );