function getComputerChoice() {
  return choice = Math.floor(Math.random() * 3);
}

function getHumanChoice() {
  let choice = prompt("Enter your choice (Rock, Paper, or Scissors):").toLowerCase();  
  let value;

  switch (choice) {
    case "rock":
      value = 0;
      break;
    case "paper":
      value = 1;
      break;
    case "scissors":
      value = 2;
      break;
  }

  return value;
}

function getChoiceFromValue(value) {
  let choice;

  switch (value) {
    case 0:
      choice = "Rock";
      break;
    case 1:
      choice = "Paper";
      break;
    case 2:
      choice = "Scissors";
      break;
  }

  return choice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  
  function playRound(humanChoice, computerChoice) {
    let humanChoiceStr = getChoiceFromValue(humanChoice);
    let computerChoiceStr = getChoiceFromValue(computerChoice);

    // If humanChoice is above computerChoice
    if (((humanChoice - 1 + 3) % 3) === computerChoice) {
      console.log(`You Win! ${humanChoiceStr} beats ${computerChoiceStr}`);
      humanScore++;

    // If humanChoice is below computerChoice
    } else if (((humanChoice + 1) % 3) === computerChoice) {
      console.log(`You Lose! ${humanChoiceStr} loses to ${computerChoiceStr}`);
      computerScore++;

    } else {
      console.log(`Tie! You picked ${humanChoiceStr} and Computer picked ${computerChoiceStr}`);
    }
  }

  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Human: ${humanScore} | Computer: ${computerScore}`);
    console.log();
  }

  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else if (humanScore < computerScore) {
    console.log("You lost the game!");
  } else {
    console.log("The game is tied!");
  }
}

playGame();