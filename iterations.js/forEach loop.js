// for each loop in js

const lang=["JS","Java","Cpp","C#",'Python']

// lang.forEach(function (item) {      //foreach in normal function
//    console.log(item);
// })

// lang.forEach((item) => {          //fpreach in arrow func
//      console.log(item);
// })

// function msgPrint(item){
//     console.log(item);
// }

// lang.forEach(msgPrint)

// lang.forEach((item, index, arr) => {
//     console.log(item,index,arr);
// })


const lang2=[{                    //Array of multiple Objects
    langNaam:"JS",
    langFile:".js"
},

{
    langNaam:"JAVA",
    langFile:".java"
},

{
    langNaam:"C++",
    langFile:".cpp"
},
]

lang2.forEach( (item)=>{          //for each in arrray of objs
    console.log(item.langFile);
})

