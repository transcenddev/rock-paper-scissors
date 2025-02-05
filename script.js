console.log("Hello World.");
console.log("This is a Project from The Odin Project.");
console.log("Rock Paper Scissors.");

// Your game will be played against the computer. You will write a function that randomly returns “rock”, “paper” or “scissors”.

// Hint: The Math.random method returns a random number that’s greater than or equal to 0 and less than 1. Think about how you can use this to conditionally return one of the multiple choices..

//Pseudocode 
// Open the original image
// Create a new image with half the width/height 
// ... and same format as the original image
// For each pixel in the new image
    // Average the four corresponding pixels in the original image
    // Store the average in the new image
// Save the new image

// Rock paper scissors 

// Plan
// Does your program have a user interface? What will it look like? What functionality will the interface have? 
// What inputs will your program have? Will the user enter data or will you get input from somewhere else?
// What’s the desired output?
// Given your inputs, what are the steps necessary to return the desired output?

// Pseudocode
// Create a choice for computer that RANDOMLY chooses rock, paper, or scissors
// Create a choice for player that chooses rock, paper, or scissors
// Create a single round of rock paper scissors
// Create a 5 round game of rock paper scissors
// Compare the choices and determine the winner
// Create a Scoreboard that keeps track of the score

// Divide and conquer
// Pick the simple one and start there





// The Math.random method returns a random number that’s greater than or equal to 0 and less than 
// 1. Think about how you can use this to conditionally return one of the multiple choices.

// Create a choice for computer that RANDOMLY chooses rock, paper, or scissors


// function randomIntFromInterval(min, max) { // min and max included 
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// let rndInt = randomIntFromInterval(1, 3);
// console.log(rndInt);

// if (rndInt == 1) {
//   alert("rock");
// } else if (rndInt == 2) {
//   alert("paper");
// } else {
//   alert("scissors");
// }

  //SET the humanScore and ComputerScore to default value 0
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

  if (humanChoice !== 'rock' && humanChoice !== 'scissors' && humanChoice !== 'paper') {
    alert("Invalid Choice");
    humanChoice = prompt("rock, paper, scissors?", "scissors").toLowerCase();
    return(humanChoice);
  } else {
    return(humanChoice);
  }
}

// Display the human choice
// console.log('Human choice: ' + humanChoice);

// game will be play round by round
// use human & computer choice as arguments
// plays a single round 
// add the round winners score and logs the winner announcement


// Create a single round for rock paper scissors
function playRound(humanChoice, computerChoice) {
  // Make the choices case-sensitive so players layers can input “rock”, “ROCK”, “RocK”, or other variations.
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  console.log(`DEBUG - Human: ${humanChoice}, Computer: ${computerChoice}`);
  if (humanChoice === computerChoice) {

    console.log("It's a tie.");
    humanScore += 1;
    computerScore += 1;
  } else if (humanChoice === 'rock' && computerChoice === 'paper') {
    console.log("You lose! Paper beats Rock!");
    computerScore += 1;
  } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
    console.log("You win! Rock beats Scissors!");
    humanScore += 1;
  } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
    console.log("You lose! Rock beats Scissors!");
    computerScore += 1;
  } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    console.log("You win! Scissors beats Paper!");
    humanScore += 1;
  } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
    console.log("You lose! Scissors beats Paper!");
    computerScore += 1;
  } else if (humanChoice === 'paper' && computerChoice === 'rock') {
    console.log("You win! Paper beats Rock!");
    humanScore += 1;
  } 
}

// // SET the human choices into variables
// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// // Start the single round for the game
// playRound(humanSelection, computerSelection);




// function playGame
function playGame() {
  // SET the human choices into variables

  // play 5 rounds// calls playround  
  for (let i = 0; i < 5; i++) { // shows 0, then 1, then 2
    // alert("Round Number: "+ i++);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    // Start the single round for the game
    playRound(humanSelection, computerSelection);
    // keeps track of scores and declares a winner at the end.
    console.log(`Scores - Human: ${humanScore}, Computer: ${computerScore}`);
  }
}

// P
playGame();