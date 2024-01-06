
const marvel=["thor","Ironman","Spider"];

const dc=["Superman","flash","batman"];

// marvel.push(dc)  
// console.log(marvel);

// let new_hero=marvel.concat(dc)  
// console.log(new_hero); 

// const spread= [...marvel,...dc]  //spread method 
// console.log(spread);

// const arr1=[1,2,3,[4,5,6],7,[8,9,[10,11]]]

// console.log(arr1.flat(Infinity)); //it merges all the subarrays into a single array


// const name="Bilal"
// console.log(Array.from(name)); // "from" method changes the string into an array

// const num={n:6541365}    // this gives empty array bcoz the it cannot recognise whose array it has to make whether the key or the value

// console.log(Array.from(num));

// const num2={
//     n1:"55", n2:"56",
//     n3:"978",n4:"64948",
//     n5:"Bilal", place:null
// };

// console.log(Array.from(num2));

// let n1=100
// let n2=5665
// let n3=844
// console.log(Array.of(n1,n2,n3));  // "of" method makes an array of different elements into a single array



// const abcd=new Uint8Array(32);
// console.log(abcd);

// const xyz=new Int16Array(32);
// console.log(xyz);

const x = new Uint8Array([21, 31]);
console.log(Array.isArray(x));



