function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  let choices = ["rock", "paper", "scissors"];
  return choices[randomNum];
}

function getHumanChoice() {
  let choice = prompt("Rock Paper Scissors?");
  return choice.toLowerCase();
}

// function playRound(humanChoice, computerChoice) {
//   if (humanChoice === computerChoice) {
//     return `Human: ${humanChoice} vs Computer: ${computerChoice} It's a draw!`;
//   }
//   if (
//     (humanChoice === "rock" && computerChoice === "scissors") ||
//     (humanChoice === "paper" && computerChoice === "rock") ||
//     (humanChoice === "scissors" && computerChoice === "paper")
//   ) {
//     humanScore++;
//     return `Human: ${humanChoice} vs Computer: ${computerChoice} You Win!`;
//   } else {
//     computerScore++;
//     return `Human: ${humanChoice} vs Computer: ${computerChoice} You Lose!`;
//   }
// }

// playRound(humanSelection, computerSelection);
function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      return `Human: ${humanChoice} vs Computer: ${computerChoice} It's a draw!`;
    }
    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      return `Human: ${humanChoice} vs Computer: ${computerChoice} You Win!`;
    } else {
      computerScore++;
      return `Human: ${humanChoice} vs Computer: ${computerChoice} You Lose!`;
    }
  }

  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);
    console.log(
      `Round ${i}: ${result} Human Score: ${humanScore} Computer Score: ${computerScore}`
    );
  }
}
