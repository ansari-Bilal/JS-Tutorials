
    //we should prevent this type of event bcoz this may create probelm so we should use addEventListener in place of this  

    /* document.getElementById('owl').onclick=function(){   
         alert("It is An Owl");
     } */

    //attachEvent() --> used in earlier days 
    //jQuery - on


    // points to cover = type , timestamp , defaultPrevented, target,
    // toElement, srcElement, currentTarget,
    // interview point of view topics = clientX,  clientY, screenX,screenY, altkey, ctrlkey,shiftkeuy, keyCode


    // document.getElementById('owl').addEventListener('click', function (event) {
    //     console.log(event);
    // }, false)

    //here "false" is a default value also called "Event Bubbling"  (smaller -> bigger)

    //and if the value is "true" then it is called "Event capturing"(bigger -> smaller)

    //They are called Event Propagation
    // examples:-

    // document.getElementById('images').addEventListener('click', function (event) {
    //     console.log("Clicked inside the ul");
    // }, false)

    //  document.getElementById('owl').addEventListener('click', function (event) {
    //     console.log("Owl clicked");
    // }, false) 

  
  /*
    document.getElementById('images').addEventListener('click', function (event) {
        console.log("Clicked inside the ul");
    }, true)

    document.getElementById('owl').addEventListener('click', function (event) {
        console.log("Owl clicked");
    }, true) 
    
    */

    // document.getElementById('owl').addEventListener('click', function (event) {
    //     console.log("Owl clicked");
    //     event.stopPropagation();         // stopPropagation()- stops the Event Bubbling 
    // }, false)


    // document.getElementById('google').addEventListener('click',function(event){
    //     event.preventDefault();
    //     event.stopPropagation();
    //     console.log("Google Clicked");
    // },false)


    document.querySelector('#images').addEventListener('click',function(event){
        console.log(event.target.tagName);      //to target the parent node 
        
        if(event.target.tagName === 'IMG'){
            console.log(event.target.id);
            let removeIt = event.target.parentNode;
            removeIt.remove();   
        }

        // removeIt.parentNode.removeChild(removeIt);  //alternate way to remove any element               
    })