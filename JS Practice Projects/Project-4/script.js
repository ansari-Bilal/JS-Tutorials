
let randomNumber = parseInt(Math.random() * 100 + 1);  //to generate random numbers b/w 1-100

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('button');   //this will create a button at the end of the Game to Start a New game Again

let prevGuess = [];   //intialize an array to store the numbers or guesses which the player input
let numGuess = 0;     //guess counter 

let playGame = true;  //to start a game 

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}


function validateGuess(guess) {        //to check if the guess is valid or not with different conditions
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else if(prevGuess.includes(guess)){
    alert(`${guess} is already present guess another number`)
  } else {
    prevGuess.push(guess);
    if (numGuess === 9) {
      displayGuess(guess);
      displayMessage(`Game Over! Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}


function checkGuess(guess) {      //to check the guess 
  if (guess === randomNumber) {
    displayMessage(`Hurray! You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}


function displayGuess(guess) {       //to display each guess made by the player 
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${10 - numGuess} `;
}


function displayMessage(message) {           //to display different messages 
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}


function endGame() {      //to end the game after 10 attempts
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `Start Again`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}


function newGame() {             //to restart a New Game again
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 0;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${10 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

