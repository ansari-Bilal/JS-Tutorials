/* Immediately Invoked function Expressions (IIFE)

iife ->> it is such functions which are written to execute immediately
         there should be a semicolon at the end of a iife to AVOID ERROR 

Q. Why to use iife ?
Ans: to avoid the pollution created by the global variables
*/

//Below is the example how we write a iife
(function chai(){   
    console.log(`DB connected`);
})();

 
//in case of arrow functions

((color) => {
    console.log(`Tomato is a ${color}`);
})("red");


