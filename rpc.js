console.log("Hello");

// Command Line version of Rock, Paper, Scissors

// Creating Global Variables for computerSelection and playerSelection.
var computerSelection = 0;
var playerSelection = 0;
var counter = 0;
var computerCount = 0;
var playerCount = 0;
//console.log(playerSelection);
//console.log(computerSelection);

// Function to create a random Computer Selection.
function computerPlay() {
	var randomNumber = Math.random();
	if (randomNumber < 0.33) {
		return computerSelection = "rock";
	} else if (randomNumber > 0.66) {
		return computerSelection = "paper";
	} else {
		return computerSelection = "scissors";
	}
}
//console.log(computerPlay());
//console.log(computerSelection);

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
}
//console.log(playerChoice());
//console.log(playerSelection);


function playRound(playerSelection, computerSelection) {
	computerSelection = computerPlay();
	playerSelection = playerChoice();

	if (computerSelection == playerSelection) {
		console.log("Both players selected: " + playerSelection + ". This game is a tie!");
	} else if (computerSelection == "rock" && playerSelection == "paper") {
		console.log("Player wins. Paper beats Rock!");
		playerCount++;
		return "Player Score: " + playerCount + ". Computer Score: " + computerCount + ".";		
	} else if (computerSelection == "rock" && playerSelection == "scissors") {
		console.log("Computer wins. Rock beats Scissors!");
		computerCount++;
		return "Player Score: " + playerCount + ". Computer Score: " + computerCount + ".";	
	} else if (computerSelection == "paper" && playerSelection == "rock") {
		console.log("Computer wins. Paper beats Rock!");
		computerCount++;
		return "Player Score: " + playerCount + ". Computer Score: " + computerCount + ".";	
	} else if (computerSelection == "paper" && playerSelection == "scissors") {
		console.log("Player wins. Scissors beats Paper!");
		playerCount++;
		return "Player Score: " + playerCount + ". Computer Score: " + computerCount + ".";	
	} else if (computerSelection == "scissors" && playerSelection == "paper") {
		console.log("Computer wins. Scissors beats Paper!");
		computerCount++;
		return "Player Score: " + playerCount + ". Computer Score: " + computerCount + ".";	
	} else if (computerSelection == "scissors" && playerSelection == "rock") {
		console.log("Player wins. Rock beats Scissors!");
		playerCount++;
		return "Player Score: " + playerCount + ". Computer Score: " + computerCount + ".";	
	};
};
//console.log(playRound(playerSelection, computerSelection));

// Function that plays a 5 round game that reports a winner or loser at the end.

function game() {
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
//while (counter < 5) {
console.log(game());
//};
//console.log(playerCount);