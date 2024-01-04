/* Memory has types or parts: 

1. Stack --> Primitive DT uses Stack Memory
2. Heap  --> Reference/ Non-prim DT Uses heap Memory as they deal with Objects
 

Stack= when any thing kept in stack then its copy is received
Heap= But in heap the ref the given i.e. any updation done is reflected in the value

*/

// let name1= "Bilal"
// let name2= name1

// name2="Karamat"    ----> this will not effect the value of name1

// console.log(name1);
// console.log(name2);


let user1={
    email: "user@gmail",
    upi: "user1@ybl"
}
let user2=user1

user2.email="abcd@gmail"   //this will update the value of user1.email also

console.log(user1.email);
console.log(user2.email);
