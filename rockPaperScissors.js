var rounds = 5;
var playerSelection;
var playerScore = 0;
var computerScore = 0;
var choices = ['rock', 'paper', 'scissors'];

function computerPlay () {
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    console.log("Player: " + playerSelection + " Computer: " + computerSelection);
    if (playerSelection.toLowerCase() === computerSelection) {
        return "TIE! " + playerSelection + " = " + computerSelection;
    } else if ((playerSelection.toLowerCase() === "rock" && computerSelection === "scissors")
            || (playerSelection.toLowerCase() === "paper" && computerSelection === "rock")
            || (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper")) {
        playerScore++;
        return "You WIN! " + playerSelection + " beats " + computerSelection + "!";
    } else {
        computerScore++;
        return "You lose. " + computerSelection + " beats " + playerSelection + ".";
    }
}

function game() {
    for(var i = 1; i <= rounds; i++) {
        playerSelection = "";
        while(!choices.includes(playerSelection.toLowerCase())) {
            playerSelection = prompt("Round " + i + ": Rock, Paper, Scissors?");
        }
        console.log(playRound(playerSelection, computerPlay()));
    }
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);
    if (playerScore > computerScore) {
        return "You BEAT the computer!";
    } else if (computerScore > playerScore) {
        return "The computer beat you. =(";
    } else {
        return "It was a tie. =| ";
    }
}