function openPlayerConfig(event) {
  const SelectedPlayer = event.target.dataset.playerid;
  editedPlayer = SelectedPlayer;

  backDrop.style.display = "block";
  playerConfigOverlayEl.style.display = "block";
}

function closePlayerConfig() {
  backDrop.style.display = "none";
  playerConfigOverlayEl.style.display = "none";
  FormEl.firstElementChild.classList.remove("error");
  errParaEl.textContent = "";
  FormEl.children[0].children[1].value = ''
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("entred-name").trim();

  if (!enteredPlayerName) {
    event.target.firstElementChild.classList.add("error");
    errParaEl.textContent = "Please enter a valid name!";
    return;
  }

  const updatedPlayerData = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerData.children[1].textContent = enteredPlayerName;
  players[editedPlayer - 1].name = enteredPlayerName

  closePlayerConfig();
}
