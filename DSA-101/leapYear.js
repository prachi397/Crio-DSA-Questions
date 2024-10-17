// Problem Description
// For an input year N, find whether the year is a leap or not.

function findLeapYear(year){
      // year is divisible by 100
      if(year%100 === 0){
         // check year is divisible by 400 
         if(year%400 === 0){
            return true;
             // leap year
         }else{
             // not a leap year
             return false;
         }
      }    
    // else divisble by 4
      else if(year%4 === 0){  
          //leap year
          return true;
      }else{
          //not a leap year
          return false; 
      }
}
console.log(findLeapYear(2024))