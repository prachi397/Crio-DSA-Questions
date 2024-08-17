// Problem Description
// A year is considered a leap year:
// If the year can be divided by 4. If it can't, it's not a leap year.
// If it can be divided by 4, check if it can also be divided by 100. If it can't, it's a leap year.
// If it can be divided by both 4 and 100, see if it can also be divided by 400. 
// If it can, it's a leap year; if it can't, it's not.

// Implement a function checkLeapYear() which Accepts a number argument year
// Returns a string "LEAP YEAR", if it's a leap year
// else, "COMMON YEAR"

function checkLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return 'LEAP YEAR';
            } else {
                return 'COMMON YEAR';
            }
        } else {
            return 'LEAP YEAR';
        }
    } else {
        return 'COMMON YEAR';
    }
}
console.log(checkLeapYear(2020));

//sample test case
if (checkLeapYear(2020) !== "LEAP YEAR")
    console.log("Test fails: Expected LEAP YEAR for input year = 2020");
  else
    console.log("Sample test case for input year = 2020 passed!");