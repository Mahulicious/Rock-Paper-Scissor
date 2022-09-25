// Creating a game of rock, paper, scissors that will be played in console.


const value = ["ROCK", "PAPER", "SCISSORS"];



function getComputerChoice (value) {
    let randomValue = Math.floor(Math.random() * value.length);
    let randomElement = value[randomValue];
    return randomElement;

}
getComputerChoice(value);

function getPlayerChoice () {
    let choice = prompt("Please enter Rock, Paper or Scissors");
    let player= choice.toLocaleUpperCase();
    return player;

}

const computerChoice = getComputerChoice(value);
const playerChoice = getPlayerChoice();

function playRound (computerChoice, playerChoice ) {
    let computerScore;
    let playerScore;
    if (computerChoice == "PAPER" && playerChoice == "ROCK") {
        computerScore + 1;
        return console.log("You lose! Paper beats Rock!");
    } else if (computerChoice == "ROCK" && playerChoice == "SCISSORS") {
        computerScore + 1;
        return console.log("You lose! Rock beats Scissors!");
    } else if (computerChoice == "SCISSORS" && playerChoice== "PAPER") {
        computerScore + 1;
        return console.log("You lose! Scissors beats Paper!");
    } else if (computerChoice == playerChoice) {
        return console.log("The game is a draw!");
    } else {
        playerScore + 1;
        return console.log("You win!");
    }


}





function game () {    
   let computerScore = 0;
   let playerScore = 0;
for (let i = 0; i < 5; i++ ) {
   playRound(computerChoice, playerChoice);
   console.log(playRound);
    



}
}
game();




