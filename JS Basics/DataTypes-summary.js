
/*
In JS Data has two types on the basis of how they are stored in the Memory::

1. Primitive :

It has 7 types-->> String , Number, Boolean , null, undefined, Symbol, BigInt


2. Reference (Non- Primitive) :
It has 3 types-->> Array, Objects, Functions

*/



// SYmbol
// const id= Symbol("123")
// const id2=Symbol("123")
// console.log(id === id2);


// [ ] == Array
// { } == Objects
// ( ) == Functions


const heros = ["Bilal", "Ansari"];

let myObj = {
    name: "Bilal",
    age: 22,
}

const myFunction = function () {
    console.log("Hello World !");
}

// console.log(heros);
// console.log(myObj);
// console.log(myFunction);


console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);
