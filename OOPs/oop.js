
const user={
    userName:"Bilal",
    LoginCount:8,
    signedIN:true,

    getUserDetails:function(){
        // console.log(`Username: ${this.userName}`);
        // console.log(this);   //this will give the whole object as o/p
    }
};

// console.log(user.userName);
// console.log(user.getUserDetails());
// console.log(this);     //this will give-> {} as o/p bcoz there is nothing in global scope right now


function User(username,LoginCount,isLoggedIn){
    this.username=username;
    this.LoginCount=LoginCount;
    this.isLoggedIn=isLoggedIn;

    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this   //its optional
}

// const userOne=User("Ali",10,false)
// const userTwo=User("Rahman",5,true)
// console.log(userOne);  

const userOne=new User("Ali",10,false)
const userTwo=new User("Rahman",5,true)
console.log(userOne.constructor);
console.log(userTwo);

/*
"new" keyword- creates an instance(object)

Step:1- an object or instance is created 
Step:2- a constructor function is called 

*/