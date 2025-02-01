console.log("Hello World.");

// Your game will be played against the computer. You will write a function that randomly returns “rock”, “paper” or “scissors”.

// Hint: The Math.random method returns a random number that’s greater than or equal to 0 and less than 1. Think about how you can use this to conditionally return one of the multiple choices..




// Open the original image
// Create a new image with half the width/height 
// ... and same format as the original image
// For each pixel in the new image
    // Average the four corresponding pixels in the original image
    // Store the average in the new image
// Save the new image



// Rock paper scissors game

// Algorithm
// Create a choice for computer that RANDOMLY chooses rock, paper, or scissors
let Math.floor(Math.random()*10) + 1;

function computerChoice(choices) {
  choices = Math.random(3) + 1;

  if (choices == 1) {
    return ("Rock");
  } else if (choices == 2) {
    return ("Paper");
  } else if (choices == 3) {
    return ("Scissors");
  }

}
// Create a choice for player that chooses rock, paper, or scissors
// Create a single round of rock paper scissors
// Create a 5 round game of rock paper scissors
// Compare the choices and determine the winner
// Create a Scoreboard that keeps track of the score

