// GLOBAL SCOPE
let humanScore = 0;
let computerScore = 0;

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

// VERSUS FUNCTIONS
const whenRock = (computer) => {
    switch(computer) {
        case 'PAPER':
            alert('YOU LOSE!')
            computerScore += 1;
            break;
        case 'SCISSORS':
            alert('YOU WIN!')
            humanScore += 1;
            break;
    }
    announceScore(humanScore, computerScore)
}

const whenPaper = (computer) => {
    switch(computer) {
        case 'SCISSORS':
            alert('YOU LOSE!')
            computerScore += 1;
            break;
        case 'ROCK':
            alert('YOU WIN!')
            humanScore += 1;
            break;
    }
    announceScore(humanScore, computerScore)
}

const whenScissors = (computer) => {
    switch(computer) {
        case 'ROCK':
            alert('YOU LOSE!')
            computerScore += 1;
            break;
        case 'PAPER':
            alert('YOU WIN!')
            humanScore += 1;
            break;
    }
    announceScore(humanScore, computerScore)
}

playGame()