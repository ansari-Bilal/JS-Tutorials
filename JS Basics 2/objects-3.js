
// Object de-structure and JSON API intro

const course={
    cousrename:"JS in Hindi",
    price:"999",
    cousreTeacher:"Hitesh Bhiya"
}

// const{cousreTeacher}=course         //here we are destructuring the object
//console.log(courseTeacher);

const{cousreTeacher : Teacher}=course
console.log(Teacher);


// <<<<< API  >>>>>

{                       //JSON in this way like objects
    "name":"bilal",     // & here both key and value are in STring format
    "college":"AEC",     
    "address":"Jamuria"
    
}


[         //JSON can also be written in form of arrays of Objects
    {},
    {},
    {}
]




