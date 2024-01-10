
//Functions with Objects and arrays

// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(213))



// Suppose if we have multiple entries to calculate so in that condition we use the spread operator i.e. ...num1
// function calculateCartPrice(...num1){   //here ...num1 is acting as Rest operator in the function 
//     return num1
// }
// console.log(calculateCartPrice(21,56,123))  //this will return output as an array




function calculateCartPrice(val1,val2,val3, ...num1){   
    return num1
}
// console.log(calculateCartPrice(21,56,123,546,222,220)) ;




const user={
    userName:"Kabeer",
    price:999
}

function handleObject(anyobject){   //"anyobject" is a generic way to pass any object
    console.log(`Username is ${anyobject.userName} and the price is ${anyobject.price}`);
}

// handleObject(user);

handleObject({     //we can also pass value in obj like this 
    userName:"Sam",
    price:899
})

const myNewArray=[100,200,300,400,500]
function returnSecValue(getArray){
    return getArray[1]
}

console.log(returnSecValue(myNewArray));