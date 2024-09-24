// Problem Description
// Two fundamental rules in functional programming are:
// Instead of modifying a variable or object, create new variables and objects and return them
// from a function when necessary. For instance, using something like
// const newArr = arrVar,
// where arrVar is an array, only creates a reference to the existing variable rather than a copy.
// As a result, changing a value in newArr would alter the value in arrVar.
// Declare function parameters – all calculations inside a function should rely solely on the
// arguments passed to the function and not on any global object or variable.
// Although adding one to a number may seem unremarkable, we can employ these principles when
// handling arrays or more intricate objects.

// Implement the manageBooks function so that it returns a new array containing all the string
// present in bookList and bookAdded is added to it and bookRemoved is removed from it.
// The add and remove functions have been implemented.
// Note: Write the code so that the global array bookList is not changed inside either function.

// Sample Input 1 --->
// De mundi systemate, Opticks
// Sample Output 1 --->
// [ "A Brief History of Time",
//     "The Works of Archimedes",
//     "The Theory of Relativity",
//     "De mundi systemate" ]
// Explanation --->
// In the above example, we return a list containing 'De mundi systemate' and all the books
// present in the booklist except 'Opticks'.

// The global variable
const bookList = ["A Brief History of Time", "The Works of Archimedes", "The Theory of Relativity", "Opticks"];

function add(arr, bookName) {
    arr.push(bookName);
    return arr;
}

function remove(arr, bookName) {
    const book_index = arr.indexOf(bookName);
    if (book_index >= 0) {
        arr.splice(book_index, 1);
        return arr;
    }
}

function manageBooks(bookAdded, bookRemoved) {
    let newArr = [...bookList];
    add(newArr, bookAdded);
    remove(newArr, bookRemoved);
    return newArr;
}

if (JSON.stringify(manageBooks("De mundi systemate", "Opticks")) !== JSON.stringify(["A Brief History of Time", "The Works of Archimedes", "The Theory of Relativity", "De mundi systemate"]))
    console.log("Test fails: Expected [\"A Brief History of Time", "The Works of Archimedes", "The Theory of Relativity", "De mundi systemate\"] for input De mundi systemate , Opticks");
else
    console.log("Sample test case for input De mundi systemate , Opticks passed");

if (JSON.stringify(manageBooks("Cosmos", "Opticks")) !== JSON.stringify(["A Brief History of Time", "The Works of Archimedes", "The Theory of Relativity", "Cosmos"]))
    console.log("Test fails: Expected [\"A Brief History of Time", "The Works of Archimedes", "The Theory of Relativity", "Cosmos\"] for input De Cosmos , Opticks");
else
    console.log("Sample test case for input Cosmos , Opticks passed");