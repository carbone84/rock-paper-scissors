The Odin Project
Project: Rock Paper Scissors

Assignment:
1. Start a new git repo for your project.
2. Create a blank HTML document with a script tag. This game is going to be played completely from the console, so don’t worry about putting anything else in there.
3. Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play.
4. Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
	a. Make your function case insensitive (so users can input rock, ROCK, RocK or any other variation)
	b. Important note: you want to return the results of this function call, not console.log() them. To test this function console.log the results:

        function playRound(playerSelection, computerSelection) {
        	// your code here!
        }

        const playerSelection = 'rock'
        const computerSelection = computerPlay()
        console.log(playRound(playerSelection, computerSelection))

5. Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
        a. At this point you should still just be using console.log() to display the results of each round and the winner at the end.
        b. Use prompt() to get input from the user. Read the docs here if you need to.
        c. Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
        d. Feel free to create more “helper” functions if you think it would be useful.
