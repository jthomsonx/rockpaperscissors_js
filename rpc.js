console.log("Hello");

// Command Line version of Rock, Paper, Scissors

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
console.log(computerPlay());
console.log(computerSelection);

//function playRound(playerSelection, computerSelection) {
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
console.log(playerChoice());
console.log(playerSelection);

//const playerSelection = 'rock'
//const computerSelection = computerPlay()
//console.log(playRound(playerSelection, computerSelection))