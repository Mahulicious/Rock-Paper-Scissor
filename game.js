



// Creating a game of rock, paper, scissors that will be played in console.

const value = ["ROCK", "PAPER", "SCISSORS"];



function getComputerChoice(value) {
    let randomValue = Math.floor(Math.random() * value.length);
    let randomElement = value[randomValue];
    return randomElement;

}
getComputerChoice(value);



function getPlayerChoiceRock() {
    const text = "ROCK";
    return text;
    
     
}
function getPlayerChoicePaper() {
    const text = "PAPER";
    return text;

}
function getPlayerChoiceScissors() {
    const text = "SCISSORS";
    return text;
}








// Will play one round of the game.

let computerWin = "Computer wins the round";
let playerWin = "Player wins the round";
let draw = "The round results in a draw";

function playRound(computerChoice, playerChoice) {
    if (computerChoice == "PAPER" && playerChoice === "ROCK") {
        return computerWin;
    } else if (computerChoice == "ROCK" && playerChoice === "SCISSORS") {
        return computerWin;
    } else if (computerChoice == "SCISSORS" && playerChoice === "PAPER") {
        return computerWin;
    } else if (computerChoice == playerChoice) {
        return draw;
    } else {

        return playerWin;
    }


}








//game() will have a for loop that will play the game two time and another function
//nested within that will keep the score of the game.


    const rockBtn = document.getElementById("rockBtn");
rockBtn.addEventListener('click', () => {
    game();
   
});

const paperBtn = document.getElementById("paperBtn");
paperBtn.addEventListener('click', () => {
    
    game();
});

const scissorsBtn = document.getElementById("scissorsBtn");
scissorsBtn.addEventListener('click', () => {
    game();
});
        




//Call the game function 
function game() {
    const playerChoice = getPlayerChoiceScissors();
    const computerChoice = getComputerChoice(value);
    let result = playRound(computerChoice, playerChoice);
    games(result);


}
    let computerScore = 0;
    let playerScore = 0;
function games(score) {
    

   
    if (score === computerWin) {
        computerScore++;
        resultPara.textContent = "You lost!";
        document.getElementById('comScore').innerHTML = computerScore;
    } else if (score === playerWin) {
        playerScore++;
        resultPara.textContent = "You won!";
        document.getElementById('playScore').innerHTML = playerScore;

    } else if (score === draw) {

        resultPara.textContent = "Its a tie!";
    }
    
   
    if (playerScore == 5 ) {
        resultPara.textContent = "Congratulations! You won the game!";
         
        document.getElementById('comScore').innerHTML = "0";
        document.getElementById('playScore').innerHTML = "0";
         computerScore = 0;
         playerScore = 0;
       

     } else if (computerScore == 5 ) {
         resultPara.textContent = "You lost the game! Better luck next time!";
          
        document.getElementById('comScore').innerHTML = "0";
        document.getElementById('playScore').innerHTML = "0";
        computerScore = 0;
        playerScore = 0;
        
     }
   
    





}

const result = document.createElement('div');
const resultPara = document.createElement('p');
resultPara.style.fontSize = "25px";
result.append(resultPara);
document.body.append(result);













