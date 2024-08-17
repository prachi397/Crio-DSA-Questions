// Problem Description
// The city mall is giving away free coupons to every visitor whose name starts with a 'T' or 't'. 
// You have to help the mall determine if a person is eligible for the offer or not.
// Implement the function checkEligibility() which Accepts a string parameter name
// Returns a string "Eligible", if the person is eligible
// "Not Eligible", if the person is not eligible

function checkEligibility(name) {
    if (name[0].toLowerCase() === 't') {
        return 'Eligible';
    } else {
        return 'Not Eligible';
    }
}
console.log(checkEligibility('Tanu'))

//sample test case
if (checkEligibility('tarun') !== 'Eligible')
    console.log("Test fails: Expected 'Eligible' for input name = 'tarun'");
else
    console.log("Sample test case for input name = 'tarun' passed!");