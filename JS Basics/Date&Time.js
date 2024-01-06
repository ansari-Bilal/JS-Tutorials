
// Date and Time........


// Time in JS is calculated in milisec from  "1 January,1970". This date is also called Unix Epoch.

// let date=new Date()
// console.log(date.toString());       // diff functions related to date
// console.log(date.toTimeString());
// console.log(date.toLocaleDateString());
// console.log(date.toDateString());
// console.log(date.toLocaleString());
// console.log(date.toJSON());

// console.log(typeof date);  // Date is a type of Object

// let newDate =new Date(2023,0,23);     //format:(2023,5,23)==>(Y,M,D)
// console.log(newDate.toDateString());

/* 
Note: Month count starts from 0 in JS
like 0-Jan  
     1-feb
     2-March and so on.... till 11-Dec
*/


// let newDate =new Date(2023,0,23,5,3);     //format:(2023,5,23)==>(Y,M,D,Hour,Minute)
// console.log(newDate.toLocaleString());

// let date2= new Date("2024-11-11")
// let myTimeStamp= Date.now();

// console.log(myTimeStamp);
// console.log(date2.getTime()); //gives output in mili sec

// console.log(Date.now()/1000); //this gives seconds but may have decimal
// console.log(Math.floor(Date.now()/1000));  //so we use Math.floor() method for the round of value


// let newDate= new Date();
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());


let newDate= new Date();
console.log(newDate);
console.log(newDate.toLocaleString('default', {  
     era:"short",
     weekday:'long',
     day:"numeric",
     dayPeriod:"narrow",
    timeZoneName:"long"
     
}));  //we can write the different details related to a date in this format in the form of Object using {....}

