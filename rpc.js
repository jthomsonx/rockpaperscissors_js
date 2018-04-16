console.log("Hello");

// Command Line version of Rock, Paper, Scissors

// Creating Global Variables for computerSelection and playerSelection.
var computerSelection = 0;
var playerSelection = 0;
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
		return "Both players selected: " + playerSelection + ". This game is a tie!";
	} else if (computerSelection == "rock" && playerSelection == "paper") {
		return "Player wins. Paper beats Rock!";
	} else if (computerSelection == "rock" && playerSelection == "scissors") {
		return "Computer wins. Rock beats Scissors!";
	} else if (computerSelection == "paper" && playerSelection == "rock") {
		return "Computer wins. Paper beats Rock!";
	} else if (computerSelection == "paper" && playerSelection == "scissors") {
		return "Player wins. Scissors beats Paper!";
	} else if (computerSelection == "scissors" && playerSelection == "paper") {
		return "Computer wins. Scissors beats Paper!";
	} else if (computerSelection == "scissors" && playerSelection == "rock") {
		return "Player wins. Rock beats Scissors!";
//	} else {
//		return "Something went wrong. Please play again!"
	};
}
//console.log(computerSelection);
//console.log(playerSelection);
console.log(playRound(playerSelection, computerSelection));
//console.log(computerSelection);
//console.log(playerSelection);

// Function that plays a 5 round game that reports a winner or loser at the end.
var counter = 0;
var computerCount = 0;
var playerCount = 0;
function game() {
/* idea is to play 5 rounds of the playRound function, but add a count to both the counter and the 
winner at the end of each round.  When all 5 rounds are played, it announces the winner and game over.
*/
// do loop, while counter < 5
// if else loop comparing computer v player and announcing the winner.	
}