// const name="Bilal"
// const surname= " Ansari"
// // console.log(name + surname);  //concatenation but it is outdated so we use the below format to dothis

// console.log(`${name}${surname}`);  //this is called back-tick method of printing 

const carName= new String("RolceRoyce")  // We can declare String like this also

// console.log(carName.__proto__);
// console.log(carName.length);
// console.log(carName.toUpperCase());
// console.log(carName.trim());
// console.log(carName.toString());

console.log(carName.substring(0,5));

console.log(carName.slice(-10,-1));

console.log(carName.replace('Royce', 'BMW'));

console.log(carName.includes(' '));  //returns trueor false

console.log(carName.split(" "));
