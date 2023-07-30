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

  event.target.textContent = players[activePlayer].symbol;
  event.target.classList.add("disable");

  const selectedCol = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;

  if (gameData[selectedRow][selectedCol] > 0) {
    alert("Select an empty field!");
    return;
  }

  gameData[selectedRow][selectedCol] = activePlayer + 1;

  const winnerId = checkForGameOver();

  if (winnerId !== 0) {
    endGame(winnerId);
  }

  curruntRound++;
  switchPlayer();
}

function checkForGameOver() {
  //checking rows for equality
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  //checking columns for equality
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  // diagonal check top left to bottom right
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  // diagonal check top right to bottom left
  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }

  //checking for a draw
  if (curruntRound === 9) {
    return -1;
  }

  return 0;
}

function endGame(winnerId) {
  gameOverEl.style.display = "block";
  if (winnerId > 0) {
    winnerName.textContent = players[winnerId - 1].name;
  } else {
    gameOverEl.firstElementChild.textContent = "It's a draw!";
  }
}

