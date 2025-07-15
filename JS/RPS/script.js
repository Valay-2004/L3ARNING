// console.log("Hello WOrld")

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  if (random == 0) {
    return "rock";
  } else if (random == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanNum = prompt(
    "Enter either from rock, paper, scissors: "
  ).toLowerCase();
  return humanNum;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let tie = 0;
  function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
      alert("It's a TIE 🤝😅");
      console.log(`Round result: It's a TIE 🤝😅 (Both chose ${humanChoice})`);
      tie++;
    } else if (humanChoice === "rock") {
      if (computerChoice === "scissors") {
        alert("Computer chose ✂️ Scissors! You WON! 🏆😎");
        console.log("Computer chose ✂️ Scissors! You WON! 🏆😎");
        humanScore++;
      } else {
        alert("Computer chose 📄 Paper! You LOST! �💔");
        console.log("Computer chose 📄 Paper! You LOST! �💔");
        computerScore++;
      }
    } else if (humanChoice === "scissors") {
      if (computerChoice === "paper") {
        alert("Computer chose 📄 Paper! You WON! 🏆😎");
        console.log("Computer chose 📄 Paper! You WON! 🏆😎");
        humanScore++;
      } else {
        alert("Computer chose 🪨 Rock! You LOST! 😭💔");
        console.log("Computer chose 🪨 Rock! You LOST! 😭💔");
        computerScore++;
      }
    } else if (humanChoice === "paper") {
      if (computerChoice === "rock") {
        alert("Computer chose 🪨 Rock! You WON! 🏆😎");
        console.log("Computer chose 🪨 Rock! You WON! 🏆😎");
        humanScore++;
      } else {
        alert("Computer chose ✂️ Scissors! You LOST! 😭💔");
        console.log("Computer chose ✂️ Scissors! You LOST! 😭💔");
        computerScore++;
      }
    } else {
      alert("Invalid input. Please enter rock, paper, or scissors. 🤔❓");
      console.log("Invalid input. Please enter rock, paper, or scissors. 🤔❓");
    }
  }

  for (let i = 0; i < 5; i++) {
    playRound();
  }
  alert(`Final Score:\nYou: ${humanScore} 😎\nComputer: ${computerScore} 🤖`);
  console.log(`Final Score:\nYou: ${humanScore} 😎\nComputer: ${computerScore} 🤖`);
}

playGame();
