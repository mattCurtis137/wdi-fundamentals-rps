////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    move = move || `getInput()`;
    return move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    move = move || 'randomPlay()';
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    var playerWins;
    var computerWins;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === "scissors" && computerMove === "rock"){  winner = "Computer";
    computerWins = computerWins + 1;
    return winner;
  }
    else if (playerMove === "scissors" && computerMove === "scissors") {
        winner = "Tie";
    return winner;
  }  
  else if (playerMove === "scissors" && computerMove === "paper") {
        winner = "Player";
    playerWins = playerWins + 1;
    return winner;
  }  
  else if (playerMove === "rock" && computerMove === "rock") {
        winner = "Tie";
    return winner;
  }  
  else if (playerMove === "rock" && computerMove === "scissors") {
        winner = "Player";
        playerWins = playerWins + 1;
    return winner;
  }  
  else if (playerMove === "rock" && computerMove === "paper") {
        winner = "Computer";
        computerWins = computerWins + 1;
    return winner;
  }  
  else if (playerMove === "paper" && computerMove === "rock") {
        winner = "Player";
        playerWins = playerWins + 1;
    return winner;
  }  
  else if (playerMove === "paper" && computerMove === "scissors") {
        winner = "Computer";
        computerWins = computerWins + 1;
    return winner;
  }  
  else if (playerMove === "paper" && computerMove === "paper") {
        winner = "Tie";
    return winner;
  }  
}
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    if (playerWins === 5) {
        return 'Player Wins Best of 3';
    }
    else if (computerWins === 5){
        return 'Computer Wins Best of 3';
    }
    return [playerWins, computerWins];
}