function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please set player name for both players");
    return;
  }

  activePlayerName.textContent = players[activePlayer].name;
  gameArea.style.display = "block";
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }

  activePlayerName.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  const selectedField = event.target;

  if(gameData[selectedRow][selectedCol] > 0) {
    alert('Select an empty field!')
    return;
  }

  event.target.textContent = players[activePlayer].symbol;
  event.target.classList.add("disable");

  const selectedCol = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;

  gameData[selectedRow][selectedCol] = activePlayer + 1;

  switchPlayer();
}
