const gameBtn = document.querySelector("#gameBtn");

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  let choices = ["rock", "paper", "scissors"];
  return choices[randomNum];
}

function getHumanChoice() {
  let choice = prompt("Rock Paper Scissors?");
  return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function checkForWinner() {
  if (humanScore === 5 || computerScore === 5) {
    const replayBtn = document.createElement("button");
    replayBtn.textContent = "Play Again";
    replayBtn.onclick = () => location.reload();
    choiceDiv.appendChild(replayBtn);
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    const gameOverText = document.createElement("p");
    gameOverText.textContent = "GAME OVER! HIT REPLAY TO START AGAIN!";
    choiceDiv.appendChild(gameOverText);
  }
}

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

gameBtn.addEventListener("click", () => {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  const result = playRound(humanSelection, computerSelection);

  const outcomeDiv = document.getElementById("outcomeDiv");
  const outcome = document.createElement("p");
  outcome.innerText = `${result} | Human Score: ${humanScore} Computer Score: ${computerScore}`;
  outcomeDiv.appendChild(outcome);
  checkForWinner();
});

//Creating the buttons for rock paper and scissors (human selection)
const choiceDiv = document.getElementById("choiceDiv");

const rockBtn = document.createElement("button");
rockBtn.textContent = "Rock";
choiceDiv.appendChild(rockBtn);

const paperBtn = document.createElement("button");
paperBtn.textContent = "Paper";
choiceDiv.appendChild(paperBtn);

const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "Scissors";
choiceDiv.appendChild(scissorsBtn);

rockBtn.addEventListener("click", () => {
  const humanSelection = "rock";
  const computerSelection = getComputerChoice();
  const result = playRound(humanSelection, computerSelection);

  const outcomeDiv = document.getElementById("outcomeDiv");
  const outcome = document.createElement("p");
  outcome.innerText = `${result} | Human Score: ${humanScore} Computer Score: ${computerScore}`;
  outcomeDiv.appendChild(outcome);
  checkForWinner();
});
paperBtn.addEventListener("click", () => {
  const humanSelection = "paper";
  const computerSelection = getComputerChoice();
  const result = playRound(humanSelection, computerSelection);

  const outcomeDiv = document.getElementById("outcomeDiv");
  const outcome = document.createElement("p");
  outcome.innerText = `${result} | Human Score: ${humanScore} Computer Score: ${computerScore}`;
  outcomeDiv.appendChild(outcome);
  checkForWinner();
});
scissorsBtn.addEventListener("click", () => {
  const humanSelection = "scissors";
  const computerSelection = getComputerChoice();
  const result = playRound(humanSelection, computerSelection);

  const outcomeDiv = document.getElementById("outcomeDiv");
  const outcome = document.createElement("p");
  outcome.innerText = `${result} | Human Score: ${humanScore} Computer Score: ${computerScore}`;
  outcomeDiv.appendChild(outcome);
  checkForWinner();
});
