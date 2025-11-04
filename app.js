let playerScore = 0;
let computerScore = 0;
let isOut = false;
let innings = 1; // 1 = player batting, 2 = computer batting
let target = 0;

function play(playerChoice) {
  if (isOut) return;
  const computerChoice = Math.floor(Math.random() * 6) + 1;

  document.getElementById("player-choice").textContent = playerChoice;
  document.getElementById("computer-choice").textContent = computerChoice;

  if (innings === 1) {
    // Player batting
    if (playerChoice === computerChoice) {
      document.getElementById("result").textContent = "Player is OUT.";
      isOut = true;
      target = playerScore + 1;
      document.getElementById("target").textContent = `Target: ${target}`;
      document.getElementById("innings-status").textContent = "Computer Batting (Innings 2)";
      isOut = false;
      innings = 2;
    } else {
      playerScore += playerChoice;
      document.getElementById("result").textContent = `You scored ${playerChoice} runs.`;
      document.getElementById("player-score").textContent = playerScore;
    }
  } else {
    // Computer batting
    if (playerChoice === computerChoice) {
      document.getElementById("result").textContent = "Computer is OUT.";
      isOut = true;
      checkWinner();
    } else {
      computerScore += computerChoice;
      document.getElementById("result").textContent = `Computer scored ${computerChoice} runs.`;
      document.getElementById("computer-score").textContent = computerScore;

      if (computerScore >= target) {
        document.getElementById("result").textContent = "Computer wins!";
        isOut = true;
      }
    }
  }
}

function checkWinner() {
  if (playerScore > computerScore) {
    document.getElementById("result").textContent = "You Win!";
  } else if (computerScore > playerScore) {
    document.getElementById("result").textContent = "Computer Wins!";
  } else {
    document.getElementById("result").textContent = "Match Drawn.";
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  isOut = false;
  innings = 1;
  target = 0;

  document.getElementById("player-choice").textContent = "-";
  document.getElementById("computer-choice").textContent = "-";
  document.getElementById("result").textContent = "-";
  document.getElementById("player-score").textContent = "0";
  document.getElementById("computer-score").textContent = "0";
  document.getElementById("target").textContent = "";
  document.getElementById("innings-status").textContent = "Player Batting (Innings 1)";
}
