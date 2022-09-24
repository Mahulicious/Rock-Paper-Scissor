// Creating a game of rock, paper, scissors that will be played in console.


const value = ["Rock", "Paper", "Scissors"];


function getComputerChoice (value) {
    let randomValue = Math.floor(Math.random() * value.length);
    let randomElement = value[randomValue];
    return randomElement;

}
getComputerChoice(value);

function playRound (playerChoice, computerChoice ) {
    if (playerChoice == "Rock" && computerChoice == "Paper") {
        return console.log("You lose! Paper beats Rock!");
    } else if (playerChoice == "Scissors" && computerChoice == "Rock") {
        return console.log("You lose! Rock beats Scissors!");
    } else if (playerChoice == "Paper" && computerChoice == "Scissors") {
        return console.log("You lose! Scissors beats Paper!");
    } else if (playerChoice == computerChoice) {
        return console.log("The game is a draw!");
    } else {
        return console.log("You win!");
    }


}
const computerChoice = getComputerChoice(value);
let choice = prompt("Please enter Rock, Paper or Scissors");
let playerChoice = choice.toUpperCase();
console.log(playRound(computerChoice, playerChoice));




