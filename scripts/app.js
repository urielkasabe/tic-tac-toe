//Player config
let editedPlayer = 0;
let activePlayer = 0;

const players = [
   {
    name: '',
    symbol: 'X'
   },
   {
    name: '',
    symbol: 'O'
   } 

];

const backDrop = document.getElementById("background");
const playerConfigOverlayEl = document.getElementById("config-overlay");

const FormEl = document.querySelector('form');
const errParaEl = document.getElementById('config-error');
const cancelConfigBtnEl = document.getElementById("cancel-config-btn");
const openConfigBtnEl = document.getElementById('confirm-config-btn');

const editbtn1 = document.getElementById("edit-player-1-btn");
const editbtn2 = document.getElementById("edit-player-2-btn");

FormEl.addEventListener('submit', savePlayerConfig)
cancelConfigBtnEl.addEventListener("click", closePlayerConfig);
backDrop.addEventListener("click", closePlayerConfig);

editbtn1.addEventListener("click", openPlayerConfig);
editbtn2.addEventListener("click", openPlayerConfig);

//Game config
const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
]

const startNewGameBtnEl = document.getElementById('start-game-btn');
const activePlayerName = document.getElementById('active-player-name');
const gameArea = document.getElementById('active-game');
const gameFieldElements = document.querySelectorAll('#game-board li');

startNewGameBtnEl.addEventListener('click', startNewGame);

for (const gameFieldEl of gameFieldElements) {
    gameFieldEl.addEventListener('click', selectGameField);
}

