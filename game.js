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
    if (player === "ROCK" || player === "PAPER" || player === "SCISSORS" ) {
    return player; 
} else {
    alert("Wrong Input");
    getPlayerChoice();
}


}



let computerWin = "Computer wins the round";
let playerWin = "Player wins the round";
let draw = "The round results in a draw"

function playRound (computerChoice, playerChoice ) {
    if (computerChoice == "PAPER" && playerChoice == "ROCK") {
        
        return computerWin;
    } else if (computerChoice == "ROCK" && playerChoice == "SCISSORS") {
       
        return computerWin;
    } else if (computerChoice == "SCISSORS" && playerChoice == "PAPER") {
    
        return computerWin;
    } else if (computerChoice == playerChoice) {
        return draw;
    } else {
        
        return playerWin;
    }


}





function game () {    
   let computerScore = 0;
   let playerScore = 0;
   
for (let i = 0; i < 5; i++ ) {
    const computerChoice = getComputerChoice(value);
    const playerChoice = getPlayerChoice();
    let result = playRound(computerChoice, playerChoice); 
    games(result);
    
}

function games(score) {
    if (score === computerWin) {
        computerScore++;
        
        console.log("You lost! " + ""+"\nThe computer score is "  + computerScore
        + " " + "\nYour score is " + playerScore);
    } else if (score === playerWin )
    {
       playerScore++;
       console.log("You won! " + "" + "\nYour score is " + playerScore
        + " " + "\nThe computer score is " + computerScore);
        
    } else if (score === draw ) {
    
    console.log("Its a tie! " + "" + "\nYour score is " + playerScore
        + " " + "\nThe computer score is " + computerScore);
    }

 }
 if (playerScore > computerScore ) {
    console.log("Congratulations! You won the game!");
} else if (computerScore > playerScore ) {
    console.log("You lost the game!");
} else {
    console.log("The game resulted in a tie!");
}


}
game(); //Call the game function






