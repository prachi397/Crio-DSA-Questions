// Problem Description
// A "Zombie" has entered a village and is going to eat the person who is next to him.
// Implement the function zombieAttack() that
// Accepts an array of strings arr, with each element being a person’s name or the "Zombie"
// Return a string with the name of the person who will be eaten, i.e., the person after "Zombie" in arr
// Note
// It is guaranteed that there will always be at least one person to the right of the zombie.
// There will be only one "Zombie" in the array, arr.

function zombieAttack(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'Zombie') {
            return arr[i + 1];
        }
    }
}
console.log(zombieAttack(["Anil", "Zombie", "Pulkit", "Chinmay"]));

//sample test case
if (zombieAttack(['Rameo', 'Kevin', 'Zombie', 'Jacky', 'Adam']) !== 'Jacky')
    console.log("Test fails: Expected 'Jacky' for input arr = ['Rameo', 'Kevin', 'Zombie', 'Jacky', 'Adam']");
else
    console.log("Sample test case for input arr = ['Rameo', 'Kevin', 'Zombie', 'Jacky', 'Adam'] passed!");