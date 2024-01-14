

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num > 4)
// const newNums = myNums.filter( (num) => {    //in this we are starting a scope i.e. { } we are writing the content inside { } so return keyword is must 
//     return num > 4
// })
// console.log(newNums);


// const  number=[]
// myNums.forEach( (num) => {
//     if(num > 4)
//     {
//         number.push(num)
//     }
// })
// console.log(number)

 const bookLibrary=[
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
 
let myBook= bookLibrary.filter( (book) => book.genre ==='Non-Fiction')     //filtering books with one feature
// myBook=bookLibrary.filter( (book) => book.publish > 2010)

myBook=bookLibrary.filter( (book) => {
    return book.genre === 'History' && book.publish > 1990                // filtering books on the basis of multiple features
})
console.log(myBook);