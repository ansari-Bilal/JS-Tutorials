// reduce function

const arr=[1,2,3]
// const total= arr.reduce(function  (acc,currval) {                  //acc= accumulator,,, currval=current value
//     console.log(`Value of acc: ${acc} and currval:${currval}`);
//     return acc + currval
// },0)     //here 0 is the initial value which first stored in acc 


const total = arr.reduce( (acc,currval) => acc+currval,0)   //arrow func
console.log(total);

const shoppingCart=[
  {
    itemName:"js course",
    price :1999
  },
  {
    itemName:"java course",
    price :999
  },
  {
    itemName:"backend course",
    price :3999
  },
]

const amountTotal=shoppingCart.reduce((acc, item) => acc+item.price,0 )
console.log(amountTotal);