// Online version of Rock, Paper, Scissors

// Creating Global Variables.
var computerSelection = 0;
var playerSelection = 0;
var counter = 0;
var computerCount = 0;
var playerCount = 0;

// Function to create a random Computer Selection.
function computerPlay() {
	var randomNumber = Math.random();
	if (randomNumber < 0.33) {
		return computerSelection = "Rock";
	} else if (randomNumber > 0.66) {
		return computerSelection = "Paper";
	} else {
		return computerSelection = "Scissors";
	};
};

// Function to create Player Selection by clicking an HTML button.
function playerChoice() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
  	button.addEventListener('click', (e) => {
  		playerSelection = button.id;
  		console.log(playRound(playerSelection, computerSelection));
  	})
  });
};

// Function to play a single round game.
function playRound(playerSelection, computerSelection) {
	computerSelection = computerPlay();
	const results = document.querySelector('#results');
	const rounds = document.querySelector('#rounds');
	const score = document.querySelector('#score');
	if (computerSelection == playerSelection) {
		results.textContent = "Both players selected: " + playerSelection + ". This round is a tie!";
	} else if (computerSelection == "Rock" && playerSelection == "Paper" || 
		computerSelection == "Paper" && playerSelection == "Scissors" ||
		computerSelection == "Scissors" && playerSelection == "Rock") {
		results.textContent = "Player wins. " + playerSelection + " beats " + computerSelection + "!";
		playerCount++;
	} else {
		results.textContent = "Computer wins. " + computerSelection + " beats " + playerSelection + "!";
		computerCount++;
	};
	counter++;
	rounds.textContent = "Rounds Played: " + counter;
	score.textContent = "Player: " + playerCount + ". Computer: " + computerCount + ".";
};

// Play a single round game.
console.log(playerChoice());


/* ORIGINAL CONSOLE CODE.

// Creating Global Variables.
var computerSelection = 0;
var playerSelection = 0;
var counter = 0;
var computerCount = 0;
var playerCount = 0;

// Function to create a random Computer Selection.
function computerPlay() {
	var randomNumber = Math.random();
	if (randomNumber < 0.33) {
		return computerSelection = "rock";
	} else if (randomNumber > 0.66) {
		return computerSelection = "paper";
	} else {
		return computerSelection = "scissors";
	};
};

// Function to create a Player Selection using a prompt.
function playerChoice() {
	var i = false;
	do {
		var playerChoice = prompt("Please pick Rock, Paper, or Scissors:");
		if (playerChoice.toLowerCase() == "rock") {
			return playerSelection = playerChoice.toLowerCase();
			i = true;
		} else if (playerChoice.toLowerCase()  == "paper") {
			return playerSelection = playerChoice.toLowerCase();
			i = true;
		} else if (playerChoice.toLowerCase() == "scissors") {
			return playerSelection = playerChoice.toLowerCase();
			i = true;
		} else {
			alert("Invalid Entry. Please try again!");
		}
	} while (i == false);
};

// Function to play a single round game.
function playRound(playerSelection, computerSelection) {
	computerSelection = computerPlay();
	playerSelection = playerChoice();
	
	if (computerSelection == playerSelection) {
		console.log("Both players selected: " + playerSelection + ". This round is a tie!");
	} else if (computerSelection == "rock" && playerSelection == "paper" || 
		computerSelection == "paper" && playerSelection == "scissors" ||
		computerSelection == "scissors" && playerSelection == "rock") {
		console.log("Player wins. " + (playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)) + " beats " + 
			(computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)) + "!");
		playerCount++;
	} else {
		console.log("Computer wins. " + (computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)) + " beats " + 
			(playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)) + "!");
		computerCount++;
	};
};

// Test for a single round game.
//console.log(playRound(playerSelection, computerSelection));

// Function that plays a 5 round game that reports a winner or loser at the end.
function game() {
	console.log("Welcome to Rock, Paper, Scissors!");
	console.log("Ready to play?  Best of 5 wins!");
	while (counter < 5) {
		console.log("Round " + (counter+1) + ":");
		round = playRound(playerSelection, computerSelection);
		counter++;
	};
	console.log("Game Over: Player Count = " + playerCount + ". Computer Count = " + computerCount + ".");
	if (playerCount == computerCount) {
		return "The game is a draw!";
	} else if (playerCount > computerCount) {
		return "Player wins!";
	} else {
		return "Computer wins!";
	};
};

// Plays the game in the console.
console.log(game());
*/