function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  let choices = ["rock", "paper", "scissors"];
  return choices[randomNum];
}
