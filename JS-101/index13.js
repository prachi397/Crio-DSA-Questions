// Problem Description
// You are given the names of two students. They will form a team for an upcoming coding competition. 
// The name of the team is the concatenation of the first characters of the two given names.
// Implement the function findTeamName() that Accepts two student names as string arguments, name1 and 
// name2, Returns a string corresponding to the name of the team

function findTeamName(name1, name2){
    let teamName = name1[0]+name2[0];
    return teamName;
}
console.log(findTeamName('Prachi','Annie'));

//sample test case
if (findTeamName('Prachi','Annie') !== "PA")
    console.log("Test fails: Expected 'PA' for input name1 = 'Prachi' and name2 = 'Annie'");
  else
    console.log("Sample test case for input name1 = 'Prachi' and name2 = 'Annie' passed!");