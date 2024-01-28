'use strict';
///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

//variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// for passing messages whan playing
const displayMessage = function (element, message) {
  document.querySelector(element).textContent = message;
};

// start game, check;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('.message', '❌ no number!');
  } else if (guess === secretNumber) {
    displayMessage('.message', 'correct u win 💥!');
    document.querySelector('body').style.backgroundColor = '	#0000ff';
    document.querySelector('.number').style.width = '30rem';
    displayMessage('.highscore', score);
    if (score > highscore) {
      highscore = score;
      displayMessage('.highscore', score);
    }
    // incorrect guessing
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      displayMessage(
        '.message',
        guess > secretNumber ? 'too high!' : 'too low !'
      );
      displayMessage('.score', score);
    } else {
      displayMessage('.message', 'u lose!');
    }
  }
});

//cHALLENGE

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayMessage('.score', score);
  displayMessage('.message', 'Start guessing...');
  displayMessage('.number', '?');
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
