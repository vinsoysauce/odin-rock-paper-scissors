// GLOBAL SCOPE
let humanScore = 0;
let computerScore = 0;

// PLAYROUND & GAME FUNCTION
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
    let choice;
    switch(num) {
        case 0:
            choice = 'ROCK';
            break;
        case 1:
            choice = 'PAPER';
            break;
        case 2:
            choice = 'SCISSORS';
            break;
    }
    return choice;
}

const getHumanChoice = () => {
    let num = Math.round(Math.random()*2);
    let auto;
        switch(num) {
        case 0:
            auto = 'ROCK';
            break;
        case 1:
            auto = 'PAPER';
            break;
        case 2:
            auto = 'SCISSORS';
            break;
    }
    let choice = prompt('Select a choice [ROCK, PAPER, SCISSORS]', auto);
    return choice.toUpperCase();
}

// ANNOUNCE CHOICE & SCORE FUNCTION
const announceChoice = (human, computer) => {
    alert(`Player choice is ${human} vs Computer choice ${computer}!`)
}

const announceScore = (human, computer)  => {
    alert(`[Player Score: ${human}][Computer Score: ${computer}]`)
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
}