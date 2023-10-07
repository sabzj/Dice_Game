//

const bdy = document.querySelector("body");
const p1Total = document.querySelector("#p1total");
const p1Current = document.querySelector("#p1current");
const p2Total = document.querySelector("#p2total");
const p2Current = document.querySelector("#p2current");
const playerTurn = document.querySelector("#player-turn");
const rollBtn = document
  .querySelector("#roll-btn")
  .addEventListener("click", rollDice);
const holdBtn = document
  .querySelector("#hold-btn")
  .addEventListener("click", hold);
const newGame = document
  .querySelector("#new-game-btn")
  .addEventListener("click", init);

let currentPlayer1 = null;
let currentPlayer2 = null;
let scores = 0;
let roundScore = 0;
let activePlayer = 0;
let gamePlaying = true;
let isClickAllowed = true;

let current1 = 0;
let current2 = 0;
let total1 = 0;
let total2 = 0;
let isPlayer1 = true;

function init() {
  gamePlaying = true;
  current1 = 0;
  current2 = 0;
  total1 = 0;
  total2 = 0;
  isPlayer1 = true;

  document.getElementById("player-turn").textContent = `Player 1's Turn`;
}

function rollDice() {
  if (gamePlaying) {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;

    if (dice1 !== 6 || dice2 !== 6) {
      if (isPlayer1) {
        current1 += dice1 + dice2;
        p1Current.innerText = current1;
      } else {
        current2 += dice1 + dice2;
        p2Current.innerText = current2;
      }
    } else {
      scores[activePlayer] = 0;
      nextPlayer();
    }
  }
}

function hold() {
  if (gamePlaying) {
    if (isPlayer1) {
      playerTurn.innerText = "Player 1's Turn";
      total1 += current1;
      current1 = 0;
      p1Current.innerText = current1;
      p1Total.innerText = total1;
      isPlayer1 = false;

      if (total1 > 100) {
        gamePlaying = false;
        playerTurn.innerText = "game over player 2 wins";
      } else if (total1 === 100) {
        gamePlaying = false;
        playerTurn.innerText = "game over player 1 wins";
      }
    } else {
      playerTurn.innerText = "Player 2's Turn";
      total2 += current2;
      current2 = 0;
      p2Current.innerText = current2;
      p2Total.innerText = total2;
      isPlayer1 = true;
      if (total2 > 100) {
        gamePlaying = false;
        playerTurn.innerText = "game over player 1 wins";
      } else if (total2 === 100) {
        gamePlaying = false;
        playerTurn.innerText = "game over player 2 wins";
      }
    }
  }
}

init();
