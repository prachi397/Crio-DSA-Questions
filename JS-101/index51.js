// Problem Description
// In an upcoming city election, only citizens aged 18 or older are eligible to vote. 
// We need to identify all eligible citizens who can cast their vote.
// Create a function canVote() that
// Accepts an array of numbers, ages, as an argument
// Filters and returns an array containing only the ages that are considered valid ages
// for voting (greater than or equal to 18).

function canVote(ages){
    return ages.filter((age)=>age>=18);
}

console.log(canVote([33, 32, 16, 40]));