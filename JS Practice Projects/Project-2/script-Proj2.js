const form = document.querySelector('form')

form.addEventListener('submit',function(event){
    event.preventDefault();  //to prevent ant Default action

    // we initialize all the values inside the event function so that we get the value when the event is taking place and not before it.

    // if we intialize it outside of the of the event function then it will give us empty value 

    const height = parseInt(document.querySelector('#height').value)    
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results');
    
    
    if((height === '' || height < 0 || isNaN(height)) && (weight === '' || weight < 0 || isNaN(weight))){
        results.innerHTML = `Please give a valid Height and Weight`;
    }

    else if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid Height ${height}`;
    }

    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    }

    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        const bmiMessage = getBmiMessage(bmi);
        results.innerHTML = `<span>BMI: ${bmi}</span><br>${bmiMessage}`;
    }
});

function getBmiMessage(bmi) {
    if (bmi < 18.6) {
        return "You r UNder Weight";
    } 
    else if (bmi >= 18.6 && bmi <= 24.9) {
        return "You r in Normal range";
    }
     else {
        return "Your r Over weight";
    }
}