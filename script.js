function getComputerChoice() {
  const randomNumberGenerator = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  if (randomNumberGenerator === 1) {
    return "rock";
  } else if (randomNumberGenerator === 2) {
    return "paper";
  } else return "scissors";
}

function playRound(playerSelection, computerSelection) {
  playerSelection = prompt("Type rock, paper or scissors:").toLowerCase();
  computerSelection = getComputerChoice();
  if (computerSelection == playerSelection) {
    return "Tie game!";
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else return `You Win! ${playerSelection} beats ${computerSelection}`;
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound());
  }
}

game();
