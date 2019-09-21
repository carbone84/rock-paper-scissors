var rounds = 5;
var playerScore = 0;
var computerScore = 0;
var choices = document.querySelectorAll(".choice");
var playerSelection_span = document.querySelector(".playerSelection");
var computerSelection_span = document.querySelector(".computerSelection");
var winLoseDraw_span = document.querySelector(".winLoseDraw");
var playerScore_span = document.querySelector(".playerScore");
var computerScore_span = document.querySelector(".computerScore");
var reset_button = document.querySelector(".reset");

init();

function init() {
    setupChoices();
}

// add click listeners to r,p,s buttons
function setupChoices() {
    for(var i = 0; i < choices.length; i++) {
        choices[i].addEventListener("click", function() {
            playRound(this.id, computerPlay());
        });
    }
}

function computerPlay() {
    return choices[Math.floor(Math.random() * 3)].id;
}

function playRound(playerSelection, computerSelection) {
    playerSelection_span.textContent = playerSelection;
    computerSelection_span.textContent = computerSelection;
    if (playerSelection.toLowerCase() === computerSelection) {
        winLoseDraw_span.textContent = "It's a DRAW!";
    } else if ((playerSelection.toLowerCase() === "rock" && computerSelection === "scissors")
            || (playerSelection.toLowerCase() === "paper" && computerSelection === "rock")
            || (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper")) {
        playerScore++;
        playerScore_span.textContent = playerScore;
        winLoseDraw_span.textContent = "YOU WON!! =)"
    } else {
        computerScore++;
        computerScore_span.textContent = computerScore;
        winLoseDraw_span.textContent = "You lost. =(";
    }
}

reset_button.addEventListener("click", function() {
    reset();
})

function reset() {
    playerScore = 0;
    playerScore_span.textContent = playerScore;
    computerScore = 0;
    computerScore_span.textContent = computerScore;
    winLoseDraw_span.textContent = "Make a selection!"
    playerSelection_span.textContent = "";
    computerSelection_span.textContent = "";
}