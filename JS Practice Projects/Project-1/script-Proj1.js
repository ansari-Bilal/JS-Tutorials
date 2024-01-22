const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body");

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function(event){
        console.log(event);
        console.log(event.target);

        if(event.target.id === 'red'){
            body.style.backgroundColor = event.target.id;
        }

        if(event.target.id === 'green'){
            body.style.backgroundColor = event.target.id;
        }

        if(event.target.id === 'blue'){
            body.style.backgroundColor = event.target.id;
        }

        if(event.target.id === 'pink'){
            body.style.backgroundColor = event.target.id;
        }

        if(event.target.id === 'orange'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'violet'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'white'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'purple'){
            body.style.backgroundColor = event.target.id;
        }

    });
});
