/*Arrays in JS are:
1.dynamic in nature
2.can have different types of elements in a single array

*/

// const Arr = [0,1,2,3,4,5]

// console.log(Arr[3]);

// const arr2= new Array(1,2,3,4,5,6)
// console.log(arr2);

// arr2.push(10);
// arr2.push(8);
// arr2.push(35);
// console.log(arr2);

// arr2.unshift(5)    //it inserts one element in the 0th index
// arr2.shift();         //it deletes the 0th elemnt

// const newArr=arr2.join();  //joins two arrays and return them as string type

// console.log(arr2);  
// console.log(newArr);  
// console.log(typeof newArr);  

/*

array.splice() --> it manipulates the actual array and returns the manipulated array.
array.slice() ---> it does not manipulates the real array.

*/

const arr2= new Array(0,1,2,3,4,5,6)
console.log(arr2);


const newarr2=arr2.slice(1,3) //returns elements from 1st pos to 3rd excluding the 3rd pos but doesnt change the actual array 
console.log(newarr2);
console.log(arr2);




// console.log("A", arr2);
// const newarr2= arr2.splice(3,2)  //removes the two elements from 3rd index and changes the original array
// console.log(newarr2);
// console.log(arr2);




