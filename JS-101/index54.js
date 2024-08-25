// Problem Description
// Implement the function filterStudents() that
// Accepts two arguments students, an array of objects, (where each object contains the 
// properties name, age and grade) and passingGrade, a number.
// Returns an array containing the names of all the students who have achieved a grade 
// greater than or equal to the passingGrade.

function filterStudents(students, passingGrade) {
    const filterStudent =  students.filter((ele)=> ele.grade >= passingGrade ? ele.name:'');
    return filterStudent.map((item)=>item.name);
}
console.log(filterStudents([
    { name: 'Alice', age: 18, grade: 85 },
    { name: 'Bob', age: 19, grade: 92 },
    { name: 'Charlie', age: 17, grade: 78 },
], 90))