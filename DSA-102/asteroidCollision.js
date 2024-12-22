// We are given an array asteroids of integers representing asteroids in a row. The indices of the 
// asteriod in the array represent their relative position in space.
// For each asteroid, the absolute value represents its size, and the sign represents its direction 
// (positive meaning right, negative meaning left). Each asteroid moves at the same speed.
// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller 
// one will explode. If both are the same size, both will explode. Two asteroids moving in the same 
// direction will never meet.

// Example 1:
// Input: asteroids = [5,10,-5]
// Output: [5,10]
// Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
// Example 2:
// Input: asteroids = [8,-8]
// Output: []
// Explanation: The 8 and -8 collide exploding each other.
// Example 3:
// Input: asteroids = [10,2,-5]
// Output: [10]
// Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.

function asteroidCollision(asteriods){
    //create an empty stack
   let stack = [];
   //iterate over all the asteriods
    for(let i=0;i<asteriods.length;i++){
        //let say initially no asteriod is destroyed
        let isDistroyed = false;
        //condition to destroy an asteriod (means element will be always negative)
        while(stack.length>0 && stack[stack.length-1]>0 && asteriods[i] < 0){
            let top = stack[stack.length-1]; //find value present at stack's top
            //if the top value is less than asteriod element
            if(Math.abs(asteriods[i]) > top){
                stack.pop();  //remove the top from stack
            }
            //else if the value at the top is equal to the asteriod element
            //both will destroyed
            else if(Math.abs(asteriods[i]) === top){
                stack.pop();  // remove top from stack
                isDistroyed = true; 
                break;
            }
            //otherwise the value at the top is greater than asteriod element
            else{
                //distroy the element do not push anywhere
                isDistroyed = true;
                break;
            }
        }
        //if still the distroyed flag is false that means we have positive value
        if(!isDistroyed){
            //push it into stack
            stack.push(asteriods[i]);
        }
    }
    return stack;
}
console.log(asteroidCollision([10,2,-5]));

//here tc and sc both are O(n)