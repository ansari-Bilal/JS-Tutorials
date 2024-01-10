

// const tinderUser= new Object()     //This is Singleton obj

const tinderUser = {}                  //This is not a singleton obj

tinderUser.id = "123bilal"
tinderUser.name = "Bilal"
tinderUser.age = "18"

// console.log(tinderUser);

const cust = {                    //In this obj "cust" we are taking properties in the form of object inside objects also called obj chaining.
    email: "xyz98@gmail.com",
    fullname: {
        custFullname: {
            firstName: "Bilal",
            lastName: "Ansari"
        }
    }
}
// console.log(cust.fullname.custFullname);

const obj1 = { 1: "A", 2: "B" }
const obj2 = { 3: "Y", 4: "Z" }

const obj3 = { ...obj1, ...obj2 }                       //to merge two objects

//const obj3=Object.assign({},obj1,obj2)         //this also merges two arrays

// console.log(obj3);

const user0 = [     //array of objects
    {
        id: "111",
        emailID: "abc@yahoo.com"
    },
    {
        id: "222",
        emailID: "xyz@yahoo.com"
    },
    {
        id: "333",
        emailID: "jkl@yahoo.com"
    }
]

// console.log(user0[2].id) ;

console.log(tinderUser);

console.log(Object.keys(tinderUser));           //returns an array fo the keys of the obj

console.log(Object.values(tinderUser));         //returns an array of values of the obj

console.log(Object.entries(tinderUser));         //rteurn the entries in form of array

console.log(tinderUser.hasOwnProperty('age'));    //checks whether or not this key is present in the obj



