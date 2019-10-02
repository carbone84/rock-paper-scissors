var playerScore = 0;
var computerScore = 0;
var choices = document.querySelectorAll(".choice");
var playerSelection_span = document.querySelector(".playerSelection");
var computerSelection_span = document.querySelector(".computerSelection");
var winLoseDraw_span = document.querySelector(".winLoseDraw");
var playerScore_span = document.querySelector(".playerScore");
var computerScore_span = document.querySelector(".computerScore");
var reset_button = document.querySelector(".reset");
var hard_button = document.querySelector(".hard-button");
var hard_div = document.querySelector(".hard");
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
    let num;
    hard_button.innerHTML == "Hard" ? num = 3 : num = 5;
    return choices[Math.floor(Math.random() * num)].id;
}

function playRound(playerSelection, computerSelection) {
    playerSelection_span.textContent = playerSelection;
    computerSelection_span.textContent = computerSelection;
    if (playerSelection.toLowerCase() === computerSelection) {
        winLoseDraw_span.textContent = "It's a DRAW!";
    } else if ((playerSelection.toLowerCase() === "rock" && (computerSelection === "scissors" || computerSelection === "lizard"))
            || (playerSelection.toLowerCase() === "paper" && (computerSelection === "rock" || computerSelection === "spock"))
            || (playerSelection.toLowerCase() === "scissors" && (computerSelection === "paper" || computerSelection === "lizard"))
            || (playerSelection.toLowerCase() === "lizard" && (computerSelection === "paper" || computerSelection === "spock"))
            || (playerSelection.toLowerCase() === "spock" && (computerSelection === "rock" || computerSelection === "scissors"))
            ) {
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

hard_button.addEventListener("click", function() {
    if(hard_button.innerHTML == "Hard") {
        hard_button.innerHTML = "Easy";
    } else {
        hard_button.innerHTML = "Hard";
    }
    hard_div.classList.toggle("hide");
})