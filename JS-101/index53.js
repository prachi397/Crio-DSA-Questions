// Problem Description
// Implement the function getTopStudents() that
// Accepts two arguments students, an array of objects, and N, a number.
// Returns an array containing the names of top N students based on their grades in the format
// 'name: name_of_student'

function getTopStudents(students, N) {
    const sortedStudents = students.sort((a,b)=>b.grade-a.grade);
    const topStudents = sortedStudents.slice(0,N);
    return topStudents.map((ele)=> `name: ${ele.name}`);
}
console.log(getTopStudents([
    { name: "Alice", grade: 90 }, 
    { name: "Bob", grade: 95 }, 
    { name: "Charlie", grade: 85 }, 
    { name: "David", grade: 92 }, 
    { name: "Eve", grade: 88 }], 
    3
));