const p1 = {
    score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Score"),
    name: "Jugador 1"
  };
  const p2 = {
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Score"),
    name: "Jugador 2"
  };
  
  const theWinnerIs = document.querySelector("#theWinnerIs");
  let maxScore = document.querySelector("#maxWin");
  let gameOver;
  
  let addScore = (player, opponent) => {
    if (!gameOver) {
      player.score += 1;
      player.display.innerText = player.score;
    }
    if (player.score === parseInt(maxScore.value)) {
      finnishGame(player, opponent);
    }
  };
  let finnishGame = (player, opponent) => {
    player.button.disabled = true;
    opponent.button.disabled = true;
    opponent.display.classList.add("has-text-danger");
    player.display.classList.add("has-text-success");
    theWinnerIs.innerText = `${player.name} ganó el juego.`;
    gameOver = true;
  };

  let resetScores = () => {
    p1.score = 0;
    p2.score = 0;
    p1.display.innerText = 0;
    p2.display.innerText = 0;
    p1.display.classList.remove("has-text-danger", "has-text-success");
    p2.display.classList.remove("has-text-danger", "has-text-success");
    p1.button.disabled = false;
    p2.button.disabled = false;
    theWinnerIs.innerText = "";
    gameOver = false;
  };
  p1.button.addEventListener("click", () => {
    addScore(p1, p2);
  });
  p2.button.addEventListener("click", () => {
    addScore(p2, p1);
  });
  resetButton.addEventListener("click", () => {
    resetScores();
  });
  

  