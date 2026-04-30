// GLOBAL SCOPE VARIABLES
let playerScore = 0;
let computerScore = 0;
let playerChoice = '';
let computerChoice = '';

// PLAYROUND & GAME FUNCTION
function playGame() {   
    announceWinner(humanScore, computerScore)
}

function playRound(human, computer) {
    announceChoice(human, computer)
    if (human == computer) alert("TIE!")
    if (human === 'ROCK') return whenRock(computer);
    if (human === 'PAPER') return whenPaper(computer);
    if (human === 'SCISSORS') return whenScissors(computer);
}

// HUMAN AND COMPUTER CHOICE FUNCTION
const getComputerChoice = () => {
    let num = Math.round(Math.random()*2);
    let choices = ['ROCK', 'PAPER', 'SCISSORS'];
    return choices[num];
}



// ANNOUNCE CHOICE & SCORE FUNCTION
const announceChoice = (human, computer) => {
    alert(`Player choice is ${human} vs Computer choice ${computer}!`)
}

const announceScore = (human, computer)  => {
    alert(`[Player Score: ${human}][Computer Score: ${computer}]`)
}

const announceWinner = (human, computer) => {
    if (human > computer) {
        alert('Player final score is the highest! PLAYER WINS!')
    } else if (human < computer) {
        alert('Computer final score is the highest! COMPUTER WINS!')
    } else {
        alert('Both final score is tied! ODIN PROJECT WINS! LOL!')
    }
}

// WIN LOSE FUNCTIONS

const winOrLose = (player, computer) => {
    if ((player == 'ROCK' && computer == 'SCISSORS') ||
        (player == 'PAPER' && computer == 'ROCK') ||
        (player == 'SCISSORS' && computer == 'PAPER'))
        return true
    else {
        return false
    }
}



// DISPLAY CONTAINER

const container = document.querySelector('#display-container')
const display = document.createElement('p');
display.textContent = ''
container.appendChild(display)

// playGame()


