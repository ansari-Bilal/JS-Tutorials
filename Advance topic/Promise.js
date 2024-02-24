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


const promise5=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
        resolve({username:"xyz", password:"987"})
        }else{
            reject("xyz error found")
        }
    },1000);
});

async function consumePromise5(){
    try {
        const response = await promise5
        console.log(response)
    } catch (error) {
        console.log(error);
    }
};
consumePromise5();


// async function getAllUSers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data=await response.json();
//         console.log(data);
    
//     } catch (error) {
//         console.log("Errrr: ",error);
//     }
// }

fetch('https://api.github.com/users/ansari-bilal')
.then((response)=>{
    return response.json()
})
.then((response)=> console.log(response))
.catch((error)=> console.log("Errorrrrr:",error));