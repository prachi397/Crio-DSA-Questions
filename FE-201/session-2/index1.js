// Problem Statement ----------->
// In the imperial system of measurement, feet and inches are used to measure length. 
// Where 1 feet = 12 inches.
// Write a class Length(ft, inch) and initialize its data members ft and inch with the values passed 
// to the constructor at the time of creation of a new object.
// Add two methods to this class ---->
// isValidObject(lengthObj) - Returns true if the ft and the inch in the lengthObj are greater than
// or equal to 0, false in any other case. This would ensure that the lengths passed to the 
// constructor at the time of creating a new object are not negative.
// addLength(lengthObj) - Takes in an object of the Length() class, and adds the members (ft and inch)
// of the current object with the members (ft and inch) of the passed length object.
// If the passed lengthObj and the current length object are both valid, the method returns an 
// array with two elements in the following format [totalFt, totalInches]. else returns [0, 0]
// Example: obj1.addLength(obj2) here obj1 and obj2 are objects of the Length class.
// Example 1:
// 5 ft 11 inch + 2 ft 8 inch = 8 ft 7 inch
// Since 8 inch + 11 inch = 19 inch = 1 ft 7 inch
// Here 1ft will be carried over and added to the sum of 5 ft + 2ft + 1 ft (carried over) = 8ft
// Hence the answer is 8ft 7inch. addLength should return [8, 7]

class Length{
    constructor(ft,inch){
        this.ft = ft;
        this.inch = inch;
    }
    isValidObj(lengthObj){
        if(lengthObj.ft >=0 && lengthObj.inch>=0){
            return true;
        }else{
            return false;
        }
    }
    addLength(lengthObj){
        if(this.isValidObj(lengthObj) && lengthObj.isValidObj(lengthObj)){
            let totalFt = this.ft + lengthObj.ft;
            let totalInches = this.inch + lengthObj.inch;
            if(totalInches>=12){
                totalFt += Math.floor(totalInches/12);
                totalInches = totalInches%12;
            }
            return [totalFt,totalInches];
        }
        return [0,0];
    }
}

const length1 = new Length(5, 11) 
const length2 = new Length(2, 8) 
const sum = length1.addLength(length2) 
console.log(sum);