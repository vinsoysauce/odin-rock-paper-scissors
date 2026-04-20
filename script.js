// GLOBAL SCOPE
let humanScore = 0;
let computerScore = 0;

// PLAYROUND FUNCTION
function playRound(human, computer) {
    announceChoice(human, computer)
    if (human === computer) return "TIE!"
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
const whenRock = (human, computer) => {
    switch(computer) {
        case 'PAPER':
            computerScore += 1;
            
    }
}