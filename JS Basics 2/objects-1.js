/*
There r 2 methods to declare Objects in JS
1. Literals  2.constructor

Singleton object->> when we make Object using constructor
*/

//Object literals :-
 
const User1={
    name:"Bilal",
    age:22,
    location:"Jamuria",
    email:"abcd@gmail.com",
    isLoggedIn:false,
    lastLogin:["Mon","Wed"]
}

// console.log(User1.age);     // We can access objects properties by using dot and also
// console.log(User1["age"]);   // by using the Square brackets and the property name in double quotes

 User1.email="xyz@6465.com"
//  Object.freeze(User1)   //This method makes all the property to freeze and do not allow changes in them
 console.log(User1);

User1.greeting=function(){
    console.log("Hello");
}

User1.greeting2=function(){
    console.log(`Hello, My name is ${this.name}`);
}

console.log(User1.greeting());
console.log(User1.greeting2());
