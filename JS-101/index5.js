// Problem Description
// Implement a function named checkBloodDonationEligiblity().
// It must take 2 input parameters:
// First parameter age is a number representing the age of a person,
// Second parameter weight is a number that represents the weight of a person.
// Implement the function to determine if the given age is eligible for blood donation or not.
// If the age is less than 18, return "UnderAge",
// Else if age is greater than or equal to 18, and
// If weight is less than or equal to 50, return "NotEligible",
// If weight is greater than 50, return 'Eligible'.

const checkBloodDonationEligiblity = (age, weight) => {
    if (age < 18) {
        return 'UnderAge';
    } else if (weight <= 50) {
        return 'NotEligible';
    } else {
        return 'Eligible';
    }
}
console.log(checkBloodDonationEligiblity(18, 55))

//sample test case
if (checkBloodDonationEligiblity(18, 51) !== "Eligible")
    console.log("Test fails: Expected Eligble for input age = 18 and weight = 51");
else
    console.log("Sample test cases for input age = 18, and weight = 51 passed!");
