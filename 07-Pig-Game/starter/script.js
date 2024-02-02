'use strict';
// player 1
const player1 = document.querySelector('.player--0');
const Score1 = document.getElementById('score--0');
const Current1 = document.getElementById('current--0');

//player2
const player2 = document.querySelector('.player--1');
const Score2 = document.getElementById('score--1');
const Current2 = document.getElementById('current--1');

//dice
const dice = document.querySelector('.dice');

//btn
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// starting conditions
let scores = [0, 0];
let curr = 0;
let activePlayer = 0;
let play = true;
Score1.textContent = 0;
Score2.textContent = 0;
Current1.textContent = 0;
Current2.textContent = 0;

//dice.style.display = 'none';
dice.classList.add('hidden');

// switch players
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  curr = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

// rolling the dice feature
btnRoll.addEventListener('click', function () {
  // rolling the dice
  if (play) {
    const diceRoll = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `dice-${diceRoll}.png`;

    // one case
    if (diceRoll !== 1) {
      curr += diceRoll;
      document.getElementById(`current--${activePlayer}`).textContent = curr;
    } else {
      switchPlayer();
    }
  }
});

// holding feature
btnHold.addEventListener('click', function () {
  if (play) {
    // add total score to active player
    scores[activePlayer] += curr;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //check if total >= 100 finish winner
    if (scores[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      dice.classList.add('hidden');
      play = false;
      //switch players
    } else {
      switchPlayer();
    }
  }
});

// new game feature
btnNew.addEventListener('click', function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
  dice.classList.add('hidden');
  Score1.textContent = 0;
  Score2.textContent = 0;
  Current1.textContent = 0;
  Current2.textContent = 0;
  scores = [0, 0];
  play = true;
  activePlayer = 0;
  curr = 0;
});
