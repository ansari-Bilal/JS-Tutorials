//Promise is an object which is used in asynchronous tasks

const promise1 = new Promise(function(resolve, reject){
    //Do an asyns task
    //DB Calls, cryptography, network calls etc

    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    },1000);
})

promise1.then(function(){
    console.log("Promise consumed");
})

//we can also write promise like this

new Promise((resolve,reject)=>{    
    setTimeout(()=>{
        console.log("Async 2 is created");
        resolve();
    },1000);

}).then(()=>{
    console.log("Async 2 consumed");
})


const promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Chai", email:"bilal@gamil.com"})
    },1000)
})

promise3.then(function(user){
    console.log(user);
});

const promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
        resolve({username:"Bilal", password:"2365"})
        }else{
            reject("Error found")
        }
    },1000)
})

promise4                           //we can also write .then or .catch in another line 
.then(function(user){
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=> console.log("Finally Block"))


