console.log("Hello World!");
console.log("This project is part of The Odin Project.");
console.log("Rock, Paper, Scissors.");

//SET the scores to default value 0
let humanScore = 0;
let computerScore = 0;

// Create a choice for computer that RANDOMLY chooses rock, paper, or scissors
function getComputerChoice() {
  // SET the computerChoice RANDOMLY
  let computerChoice = Math.random();
  // ASSIGN rock, paper, scissors values
  if (computerChoice <= 0.33 ) {
    return "rock"; // Display Rock
  } else if (computerChoice <= 0.67) {
    return "paper"; // DISPLAY Paper
  } else {
    return "scissors"; // DISPLAY Scissors
  }
}
// Display the computer choice
// console.log('Computer choice: ' + getComputerChoice());

// Create a choice for human that will return valid choices
function getHumanChoice() {
  // Ask the user to choose between rock, paper, scissors
  let humanChoice = prompt("rock, paper, scissors?", "rock").toLowerCase();
  // Check if the user input is valid
  if (humanChoice !== 'rock' && humanChoice !== 'scissors' && humanChoice !== 'paper') {
    alert("Invalid Choice");
    // ask again
    humanChoice = prompt("rock, paper, scissors?", "scissors").toLowerCase();
    return(humanChoice);
  } else {
    return(humanChoice);
  }
}

// Create a single round for rock paper scissors
function playRound(humanChoice, computerChoice) {
  // Make the choices case-sensitive so players layers can input “rock”, “ROCK”, “RocK”, or other variations.
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  console.log(`DEBUG - Human: ${humanChoice}, Computer: ${computerChoice}`);
  // // create a logic that computes who is the winner every round
  // if (humanChoice === computerChoice) {
  //   console.log("It's a tie.");
  //   // humanScore += 1;
  //   // computerScore += 1;
  //   return;
  // } else if (humanChoice === 'rock' && computerChoice === 'paper') {
  //   console.log("You lose! Paper beats Rock!");
  //   computerScore += 1;
  //   return;
  // } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
  //   console.log("You win! Rock beats Scissors!");
  //   humanScore += 1;
  //   return;
  // } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
  //   console.log("You lose! Rock beats Scissors!");
  //   computerScore += 1;
  //   return;
  // } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
  //   console.log("You win! Scissors beats Paper!");
  //   humanScore += 1;
  //   return;
  // } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
  //   console.log("You lose! Scissors beats Paper!");
  //   computerScore += 1;
  //   return;
  // } else if (humanChoice === 'paper' && computerChoice === 'rock') {
  //   console.log("You win! Paper beats Rock!");
  //   humanScore += 1;
  //   return;
  // } 


  // Cleaner Version
  // Determine the winner each round
  if (humanChoice === computerChoice) {
    console.log("It's a tie.");
  } else if (humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'scissors' && computerChoice === 'paper' || humanChoice === 'paper' && computerChoice === 'rock') {
    // display the winner, make the first string uppercase
    console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}!`);
    humanScore += 1;
  } else {
    // display t
    console.log(`You lose! ${computerChoice} beats ${humanChoice} !`);
    computerScore += 1;
  }
}

// function playGame
function playGame() {
  // play 5 rounds// calls playround  
  for (let i = 0; i < 5; i++) {
    console.log(`Round ${i+1}`);
    // SET the human choices into variables
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    // Start the single round for the game
    playRound(humanSelection, computerSelection);
    // keeps track of scores and declares a winner at the end.
  }

  // Display the final score
  console.log(`Final Score: You: ${humanScore}, Computer: ${computerScore}`);
  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (humanScore < computerScore) {
    console.log("Sorry, you lost the game.");
  } else {
    console.log("It's a tie game overall.");
  }
}

// Start the game
playGame();