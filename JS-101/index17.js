// Problem Description
// Your extended family is getting together for a potluck dish! A potluck dish is a meal where each 
// attending member brings a food item to share and eat.
// To ensure variety in the dishes, you have placed a rule where each person can only bring a dish 
// whose starting and ending characters are the same as the starting and ending characters of 
// the person's name.
// For example, "john" can only bring dishes with names starting with 'j' and ending with 'n', 
// like "jerk chicken".
// Implement a function potluckDish() which Takes in two string arguments name and dish
// Returns a boolean true if the person with the given name is allowed to bring the given dish
// false otherwise

function potluckDish(name, dish) {
    if (name[0] === dish[0] && name[name.length - 1] === dish[dish.length - 1]) {
        return true;
    } else {
        return false;
    }
}
console.log(potluckDish('john', 'jerk chicken'));

//sample test case
if (potluckDish("Jhony", "Jelly") !== true)
    console.log("Test fails: Expected true for input name = Jhony and dish = Jelly");
else
    console.log("Sample test case for input name = Jhony and dish = Jelly passed!");