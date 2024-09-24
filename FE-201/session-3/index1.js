// Problem Description
// In the code editor, the prepareTea and getTea functions are already defined for you.
// Implement the tea function so that it returns the output of getTea function corresponding 
// to the typeOfTea and numberOfCups

// Sample Input 1
// "greenTea", 3
// Sample Output 1
// [ 'greenTea', 'greenTea', 'greenTea' ]


const getTea = (typeOfTea, numberOfCups) => {
    const tea_cups = [];
    for (let cups = 1; cups <= numberOfCups; cups += 1) {
        const tea_cup = prepareTea(typeOfTea);
        tea_cups.push(tea_cup);
    }
    return tea_cups;
};

const prepareTea = (typeOfTea) => {
    return typeOfTea;
}

const tea = (typeOfTea, numberOfCups) => {
    return getTea(typeOfTea, numberOfCups);
}

if (JSON.stringify(tea("greenTea", 3)) !== JSON.stringify(['greenTea', 'greenTea', 'greenTea']))
    console.log("Test fails: Expected [ 'greenTea', 'greenTea', 'greenTea' ] for input typeOfTea = greenTea and numberOfCups = 3");
else
    console.log("Sample test case for input typeOfTea = greenTea and numberOfCups = 3 passed!");

if (JSON.stringify(tea("herbalTea", 1)) !== JSON.stringify(['herbalTea']))
    console.log("Test fails: Expected [ 'herbalTea' ] for input typeOfTea = herbalTea and numberOfCups = 1");
else
    console.log("Sample test case for input typeOfTea = herbalTea and numberOfCups = 1 passed!");