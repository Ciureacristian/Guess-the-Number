let myGuess = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let lives = 10;
const guessResultsList = document.getElementById('guessResults');
const userGuessDisplay = document.getElementById('userGuessDisplay');
const hintMessageSpan = document.getElementById('hintMessage')
const tryAgain = document.getElementById('tryAgain');
const livesSpan = document.getElementById('lives');

document
  .getElementById('guessForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();
   
    const userGuess = parseInt(document.getElementById('userGuess').value);
    attempts++;
    

    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        alert('Please enter a valid number between 1 and 100.');
      } else {
        lives--;

        livesSpan.textContent = `${lives} lives left`;
        userGuessDisplay.textContent = `You guessed the number: ${userGuess}`;
        if (userGuess < myGuess) {
          tryAgainMessage.textContent = 'The number is too small. Keep trying!';
          resultMessage.textContent = '';
        } else if (userGuess > myGuess) {
          tryAgainMessage.textContent = 'The number is too high. Keep trying!';
          resultMessage.textContent = '';
        } else {
          tryAgainMessage.textContent = '';
          resultMessage.textContent = 'Congratulations! You guessed the correct number.';
          document.getElementById('userGuess').disabled = true;
          document.getElementById('userGuess').value = '';
        } 
        if (userGuess === myGuess) {
            guessResultsList.innerHTML = `You guessed the correct number in ${attempts} attempts.`;
          }
        }      
    });

  

    document.getElementById('resetButton').addEventListener('click', function() {
        myGuess = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        lives = 10; 
        livesSpan.textContent = `${lives} vieți rămase`;
        guessResultsList.innerHTML = '';
        userGuessInput.disabled = false;
        userGuessInput.value = '';
        userGuessDisplay.textContent = '';
        tryAgainMessage.textContent = '';
        resultMessage.textContent = '';
        document.getElementById('userGuess').disabled = false;
      });
