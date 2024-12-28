# Crio-DSA-Questions
Important DSA Questions using JavaScript

Common Interview Questions

1. Difference between let, var and const?
 let, var and const are used to declare variables in javascript. let, var and const in javascript are differ
 in terms of their scope, their hoisting behaviour and their redeclaration or reassignmnet.
  -> scope : variable defined using var keyword has function scope that means they can be accessed anywhere in 
            the function, they are defined.
            for example :
   
                            function scopeExample(){
                                var a = 5;
                                console.log(a);
                            }
   
            whereas variables which are defined using let or const keyword are block scope that means they can
            be accessed within the block {} only, we can not access then outside the block.
            for example :
   
                             {
                                let a = 5;
                                console.log(a);
                             }
   

 -> Hoisting : variable declared using var are hoisted to the top of their containing scope and initialize with
              undefined.
              whereas the let and const variables are also hoisted but remains in temporal dead zone from the start of the block untill the variable is declared which gives reference error we try to access 
              them before their declaration.
              for example : 
              
                             console.log(a);  //return undefined
                             var a;

                             
 -> Redeclaration/Reassignment : var variables can be redeclare and reassign whereas the let variable can only 
                                 be reassigned (that means we can overrirde their value) but we can not redeclare
                                 let variables and the const variable can not be redeclare or reassign, that means once we assign a value to the const variable then we can not change its value.
                                 for example : 


                                             //var variable
                                               var a = 5;
                                               console.log(a);  //5
                                               var a = 3;
                                               console.log(a);  //3
                                               a = 4;
                                               console.log(a);  //4

                                               //let variable
                                               let b = 5;
                                               console.log(b);  //5
                                               let b = 3; //error
                                               b = 3;
                                               console.log(b);  //3

                                               //const variable
                                               const c = 10;
                                               console.log(c); //10
                                               c = 15; //error
                                               const c = 20  //error


2. What are closures, and how are they used in JavaScript?
   Clouser is the inner function that can access the variables and parameters of its outer parent function,
   even after the outer function has finished its execution. Inner function has the ability to access and manipulate its outer parent function's variables.
   Inner function stores the reference of its outer parent function that's why it can capture the variables and parameters of its outer function within its lexical environment.

  
                        function outer(a){
                            function inner(b){
                                 return a+b;
                            }
                            return inner;
                          }
                         let innerFunc = outer(10);
                     console.log(innerFunc(5));   //15
                     

clousers can be used for many ways in javascript :
-> Encapsulation
-> function currying
-> callbacks
-> memoization
