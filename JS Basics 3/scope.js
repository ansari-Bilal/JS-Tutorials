/* Here we will learn about Scopes
1. Global scope
2. Local Scope
*/


let a=100
if (true) {
    let a = 10
    console.log("Inner a",a)
    const b = 20
    var c = 30
}  
console.log(a);



const b=200
if (true) {
    let a = 10
    const b = 20
    console.log("Inner b",b)
    var c = 30
}  
console.log(b);




var c=300
if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log("Inner c",c)
}  
console.log(c);  
//"var" has a disadvantage as it changed the should come 300 as it var c=300 is in the global scope but the output is coming as 30 which is in the local scope      
// so we avoid using "var" and prefer "let" and "const"

