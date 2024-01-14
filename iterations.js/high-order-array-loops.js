// for of loops

const arr = [1, 2, 3, 4, 5]

for (const i of arr) {
    // console.log(i);
}

const greetings = "Hello World"
for (const i of greetings) {
    if (i === " ") break;
    // else console.log(`Each char is ${i}`);

}

//Maps
const map=new Map();
map.set('In','India')
map.set('USA','America')
map.set('Pak','Pakistan')


for (const [key,value] of map) {
// console.log(key,"=>",value); 
}


// const myObj={
//     "game":"IGI",
//     "name":"Bilal",
//     "dept":"IT"
// }
//     for (const [key,value] of myObj) {   //"for of" loop is not applicable in Objects
//     console.log(key,":",value);   
// }


const myObj2={
    "game":"IGI",
    "name":"Bilal",
    "dept":"IT"
}
for (const i in myObj2) {           // we can use "for in"-loop in Objects but not "for of" loop.
    // console.log(`${i} => ${myObj2[i]}`); 
    console.log();
}



const myArr=[5,6,8,2,3]
for (const key in myArr) {
    console.log(myArr[key]);
    // console.log(`${key}:${myArr[key]}`);
}
