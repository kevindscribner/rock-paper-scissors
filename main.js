function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return(choice);
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        alert(`Both players chose ${playerSelection}, it's a tie!`);
        alert(`Current Score - Player: ${playerScore}, Computer: ${computerScore}`)
    } else if (computerSelection === "Rock" && playerSelection === "Paper" 
    || computerSelection === "Paper" &&  playerSelection === "Scissors" 
    || computerSelection === "Scissors" && playerSelection === "Rock") {
        alert(`${playerSelection} beats ${computerSelection}, you win!`); 
        playerScore += 1;
        alert(`Current Score - Player: ${playerScore}, Computer: ${computerScore}`)
    } else {
        alert(`${computerSelection} beats ${playerSelection}, you lose!`);
        computerScore += 1;
        alert(`Current Score - Player: ${playerScore}, Computer: ${computerScore}`)
    }
};

function game() {
    rounds = 1;

    while (rounds <= 5) {
        let playerSelection = ''
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        rounds += 1;
    }

    if(playerScore > computerScore) {
        alert(`Congratulations you won!\nFinal Score - Player: ${playerScore} Computer: ${computerScore}`)
    } else if(playerScore < computerScore) {
        alert(`You Lost!\nFinal Score - Player: ${playerScore} Computer: ${computerScore}`)
    } else {
        alert(`It's a draw!\nFinal Score: Player - ${playerScore} Computer: ${computerScore}`)
    }
}

let playerScore = 0;
let computerScore = 0;

/* User Interface */

const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
let score = document.getElementsByClassName('score')

rockBtn.addEventListener('click', () => {
    playerSelection = 'Rock';
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});

paperBtn.addEventListener('click', () => {
    playerSelection = 'Paper';
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});

scissorsBtn.addEventListener('click', () => {
    playerSelection = 'Scissors';
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});