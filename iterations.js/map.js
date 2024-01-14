//map 

const myNum= [1,8,3,9,5,6,7,4,5,2]

// const updateNum= myNum.map( (num) => num+10)   //adding 10 to all elements of myNum array
const updateNum= myNum.map( (num) => {return num+10})    //can also be written like this where "return" keyword is must else it will return "undefined"
// console.log(updateNum);


// let updateNum2=[];
// myNum.forEach( (num1) => {
//     return updateNum2.push(num1+10);   //can also be written like this where "return" keyword is must else it will return "undefined"
// });



const newNumber=myNum                            //chaining of function such as map, filter 
                    .map( (num) => num * 10)     //here at each step the updated value is passed 
                    .map( (num) => num + 1)
                    .filter( (num) => num < 90)
console.log(newNumber); 
console.log(newNumber.sort()); 
