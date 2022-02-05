let playerPoints = 0;
let computerPoints = 0;

function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return(choice);
};

function playRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        results.innerText = `Both players chose ${playerSelection} it's a draw.`;
    } else if (
        computerSelection === "Rock" && playerSelection === "Paper" ||
        computerSelection === "Paper" &&  playerSelection === "Scissors" || 
        computerSelection === "Scissors" && playerSelection === "Rock"
        ) { 
        playerPoints += 1;
        results.innerText = `${playerSelection} beats ${computerSelection} you win this round.`;
    } else {
        results.innerText = `${computerSelection} beats ${playerSelection} you lost this round.`;
        computerPoints += 1;
    };
    handleUI(playerSelection, computerSelection);
    gameOver();
};

/* User Interface */

const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const playerChoice = document.getElementById('playerChoice');
const comChoice = document.getElementById('comChoice');
const playerScore = document.getElementById('playerScore');
const comScore = document.getElementById('comScore');
const results = document.getElementById('results');

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

function playerGraphic(playerSelection){
    if (playerSelection === 'Rock') {
        playerSelection = '✊';
    }
    else if (playerSelection === 'Paper') {
        playerSelection = '🤚';
    }
    else {
        playerSelection ='✌️';
    }
    return playerSelection;
};

function comGraphic(computerSelection){
    if (computerSelection === 'Rock') {
        computerSelection = '✊';
    }
    else if (computerSelection === 'Paper') {
        computerSelection = '🤚';
    }
    else {
        computerSelection ='✌️';
    }
    return computerSelection;
};

function handleUI(playerSelection, computerSelection){
    computerSelection = comGraphic(computerSelection);
    comChoice.childNodes[0].textContent = `${computerSelection}`;
    comScore.innerText = `Enemy's Score: ${computerPoints}`;

    playerSelection = playerGraphic(playerSelection);
    playerChoice.childNodes[0].textContent = `${playerSelection}`;
    playerScore.innerText = `Player's Score: ${playerPoints}`;
};

function gameOver(){
    if(playerPoints === 5 || computerPoints === 5 ) {
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        if(playerPoints === 5){
            results.innerText = 'Congratulations you won! Refresh the page to play again.'
        } else {
            results.innerText = 'You lost :( refresh the page to play again'
        };
    };
};