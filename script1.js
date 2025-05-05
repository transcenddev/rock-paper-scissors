console.log("Hello World!");
console.log("This project is part of The Odin Project.");
console.log("Rock, Paper, Scissors.");

//SET the scores for both human and computer
let humanScore = 0;
let computerScore = 0;

// Generate random choice for the computer between rock, paper, or scissors.
function getComputerChoice() {
  // Generate random number between 0 and 1
  let computerChoice = Math.random();
  
  // ASSIGN the random number to one of the three choices
  if (computerChoice <= 0.33 ) {
    return "rock"; 
  } else if (computerChoice <= 0.67) {
    return "paper"; 
  } else {
    return "scissors"; 
  }
}

// Ask the user to choose between rock, paper, or scissors
function getHumanChoice() {
  let humanChoice = prompt("rock, paper, scissors?", "rock").toLowerCase();

  // Validate the user's choice; if invalid, ask again recursively
  if (humanChoice !== 'rock' && humanChoice !== 'scissors' && humanChoice !== 'paper') {
    alert("Invalid Choice");
    return getHumanChoice(); // Recursive call if input is invalid
  }
  return humanChoice;
}

function results(msg) {
  const resultsDiv = document.querySelector("#results");
  resultsDiv.innerHTML += msg + "<br>";
}

// Create a single round for rock paper scissors
function playRound(humanChoice, computerChoice) {
  // Normalize both to lowercase to handle any case variations (e.g., "rock", "ROCK", "RocK")
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  console.log(`Choices - Human: ${humanChoice}, Computer: ${computerChoice}`);

  // create a logic that computes who is the winner every round
  if (humanChoice === computerChoice) {
    results("It's a tie.");
    humanScore += 1;
    computerScore += 1;
  } else if (humanChoice === 'rock' && computerChoice === 'paper') {
    results("You lose! Paper beats Rock!");
    computerScore += 1;
  } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
    results("You win! Rock beats Scissors!");
    humanScore += 1;
  } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
    results("You lose! Rock beats Scissors!");
    computerScore += 1;
  } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    results("You win! Scissors beats Paper!");
    humanScore += 1;
  } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
    results("You lose! Scissors beats Paper!");
    computerScore += 1;
  } else if (humanChoice === 'paper' && computerChoice === 'rock') {
    results("You win! Paper beats Rock!");
    humanScore += 1;
  } 

  // Update the current scores after each round
  results(`Scores - Human: ${humanScore}, Computer: ${computerScore}`);

  // Display winner if any player reaches 5 points
  if (humanScore >= 5) {
    results("🎉 You win the game!");
  } else if (computerScore >= 5) {  
    results("💻 Computer wins the game!");
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  document.querySelector("#results").innerHTML = "Game has been reset.<br>Scores - Human: 0, Computer: 0";
}

document.querySelector("#reset").addEventListener("click", resetGame);

//   // Determine the winner each round
//   if (humanChoice === computerChoice) {
//     // console.log("It's a tie.");
//   } else if (humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'scissors' && computerChoice === 'paper' || humanChoice === 'paper' && computerChoice === 'rock') {
//     // If human wins, display the result with capitalized choices
//     // console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}!`);
//     // humanScore += 1;
//   } else {
//     // If computer wins display the result
//     // console.log(`You lose! ${computerChoice} beats ${humanChoice} !`);
//     // computerScore += 1;
//   }
// }

// Play the game for 5 rounds
// function playGame() {
//   // Repeat the game for 5 rounds
//   for (let i = 0; i < 5; i++) {
//     // Display the current round number
//     console.log(`Round ${i+1}`);

//     // Get the human and computer choice
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();

//     // Compare the choices and decide the winner for this round
//     playRound(humanSelection, computerSelection);
//   }

//   // Display the final score and determine the winner
//   console.log(`Final Score: You: ${humanScore}, Computer: ${computerScore}`);
//   if (humanScore > computerScore) {
//     console.log("Congratulations! You won the game!");
//   } else if (humanScore < computerScore) {
//     console.log("Sorry, you lost the game.");
//   } else {
//     console.log("It's a tie game overall.");
//   }
// }

// Start the game
// playGame();

// PROBLEM
// Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)

// Create three buttons, one for each selection.
const rock = document.querySelector('#Rock');
const paper = document.querySelector('#Paper');
const scissors = document.querySelector('#Scissors');

// Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)

rock.addEventListener('click', () => {
  const humanChoice = rock.id;
  const computerChoice = getComputerChoice();
  return playRound(humanChoice, computerChoice);
})

paper.addEventListener('click', () => {
  const humanChoice = paper.id;
  const computerChoice = getComputerChoice();
  return playRound(humanChoice, computerChoice);
})

scissors.addEventListener('click', () => {
  const humanChoice = scissors.id;
  const computerChoice = getComputerChoice();
  return playRound(humanChoice, computerChoice);
})




// 4. Display the running score, and announce a winner of the game once one player reaches 5 points.

// how can i add scores?
// display the score in every play
// shuld i  use function again in evry
if (humanScore || computerScore > 0) {
  // results("humanScore");
  // results(computerScore);
  console.log(humanScore);
}

// how can i display the winner of the game if one plater reaches 5pts
// if player reach 5, display score
// if humanScore or computerScore =< 5 
//   display the winner