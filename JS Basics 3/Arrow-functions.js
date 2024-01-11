// Arrow Functions

//   "this" keyword--> it refers to the current context

// const user={
//     username:"Bilal",
//     price:1099,

//     welcomeMsg:function(){

//      console.log(`${this.username}, welcome to JS`);
//      console.log(this);
//     }
// }

// user.welcomeMsg()
// user.username="Kabeer"
// user.welcomeMsg()

// console.log(this)  // -->> it will give only {} bcoz present context is empty

// const chai= () =>{
//     let userName="Kabeer",
//     console.log(this);
// }


/* 
If there is curly braces { } then "return" should be written 
and if there is parenthesis we dont need to write "return" keyword 
*/

// const sum=(num1,num2) =>{   // Arrow Function
//     return num1+num2        // it is explicit return bcoz we are adding "return" keyword here
// }
// console.log(sum(5,10));


// const sum=(num1,num2) => (num1 + num2)     // it is called implicit return here we do not need to write "return" keyword
// console.log(sum(10,80));

// const sum=(num1,num2) => {username:"Bilal"}   //-->> it will show "undefined" as it has {}
// console.log(sum(1,2));

const sum=(num1,num2) => ({username:"Bilal"})   //-->> it will give the proper output as it is wrapped in () and no "return" keyword is required
console.log(sum(1,2));

