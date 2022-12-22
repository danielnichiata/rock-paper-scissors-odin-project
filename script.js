function getComputerChoice() {
  const randomNumberGenerator = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  if (randomNumberGenerator === 1) {
    return "rock";
  } else if (randomNumberGenerator === 2) {
    return "paper";
  } else return "scissors";
}

function playRound(playerSelection, computerSelection) {
  console.log(playerSelection);
  computerSelection = getComputerChoice();
  console.log(computerSelection);
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

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id == 1) {
      const div = document.createElement("div");
      const head1 = document.createElement("h3");
      head1.textContent = `Result ${playRound("paper", getComputerChoice())}`;
      div.appendChild(head1);
      document.body.insertBefore(div, null);
      console.log(playRound("paper", getComputerChoice()));
    } else if (button.id == 2) {
      console.log(playRound("rock", getComputerChoice()));
    } else {
      console.log(playRound("scissors", getComputerChoice()));
    }
  });
});
