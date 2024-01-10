// Functions 

//Examples: 
function myName(){
console.log("B");
console.log("I");
console.log("L");
console.log("A");
console.log("L");
}


// myName();


// function sum(num1,num2){
//    console.log( num1 + num2);
// }



// const result=sum(2,5);
// console.log(result);   //this will give o/p as "undefined"



// function sum(num1,num2){
//     let result=num1+num2;
//     return result

//     // return num1+num2
//  }
//  const result=sum(2,5);
// console.log(result);      //this will return the value 


// function showMessage(userName){
//     return `${userName} is a student of AEC`
// }
// console.log(showMessage("Kabeer"));

// console.log(showMessage());  //If e dont pass an argument then it will show undefined not null
 //So we can change it using if else


//  function showMessage(userName){
//     if(userName === undefined){
//         console.log("Please pass the Argument");
//         return
//     }
//     return `${userName} is a student of AEC`
// }
// console.log(showMessage());



function showMessage(userName="yusuf"){
    if(!userName){
        console.log("Please pass the Argument");
        return
    }
    return `${userName} is a student of AEC`
}
console.log(showMessage("Kabeer"));