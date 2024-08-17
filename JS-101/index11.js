// Problem Description
// A school uses the following rules to assign grades based on students’ marks
// From 0 to less than 25 - F
// From 25 to less than 45 - E
// From 45 to less than 50 - D
// From 50 to less than 60 - C
// From 60 to less than 80 - B
// From 80 to 100 - A
// If the mark is less than 0 or greater than 100 then it is considered invalid.
// Implement the function gradeMarks() which Accepts a number argument marks
// Returns a string representing the corresponding grade (eg: "A", “B”) if marks is between 0 and 100
// "Invalid", if marks is less than 0 or greater than 100

function gradeMarks(marks){
    if(marks <0 || marks>100){
        return 'Invalid';
    }
    else if(marks>=0 && marks < 25){
        return 'F'
    }else if(marks >= 25 && marks < 45){
        return 'E';
    }else if(marks >=45 && marks < 50){
        return 'D';
    }else if(marks >=50 && marks < 60){
        return 'C';
    }else if(marks >=60 && marks < 80){
        return 'B';
    }else{
        return 'A';
    }
}
console.log(gradeMarks(25));

//sample test case
if (gradeMarks(45) !== "D")
    console.log("Test fails: Expected D for input marks = 45");
else
    console.log("Sample test case for input marks = 45 passed!");
