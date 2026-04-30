// GLOBAL SCOPE VARIABLES
let playerScore = 0;
let computerScore = 0;
let playerChoice = '';
let computerChoice = '';


// PLAY ROUND & GAME FUNCTION
function playGame() {
    ask()   
    getPlayerChoice()
}

// // HUMAN AND COMPUTER CHOICE FUNCTION
const getComputerChoice = () => {
    const num = Math.round(Math.random()*2);
    const choices = ['🪨', '📄', '✂️'];
    computerChoice = choices[num];
}

const getPlayerChoice = () => {
    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector('#scissors');

    rock.addEventListener('click', () => {
        playerChoice = '🪨';
        getComputerChoice()
        winOrLose(playerChoice, computerChoice)
        changeScore(playerScore, computerScore)
        announceChoice(playerChoice, computerChoice)
    })
    paper.addEventListener('click', () => {
        playerChoice = '📄';
        getComputerChoice()
        winOrLose(playerChoice, computerChoice)
        changeScore(playerScore, computerScore)
        announceChoice(playerChoice, computerChoice)
    })
    scissors.addEventListener('click', () => {
        playerChoice = '✂️';
        getComputerChoice()
        winOrLose(playerChoice, computerChoice)
        changeScore(playerScore, computerScore)
        announceChoice(playerChoice, computerChoice)
    })
}


// ANNOUNCE CHOICE & SCORE FUNCTION
const announceChoice = (player, computer) => {
    display = `😀 choice is ${player} vs 🤖 choice ${computer}`
    changeDisplay(display);
}

const announceWinner = (player, computer) => {
    if (player > computer) {
        display = '😀 final score is the highest! PLAYER WINS!'
    } else if (player < computer) {
        display = 'Computer final score is the highest! COMPUTER WINS!'
    } else {
        display = 'Both final score is tied! ODIN PROJECT WINS! LOL!';
    }
}

// WIN LOSE FUNCTIONS

const winOrLose = (player, computer) => {
    if ((player == '🪨' && computer == '✂️') ||
        (player == '📄' && computer == '🪨') ||
        (player == '✂️' && computer == '📄'))
        playerScore++
    else if (player == computer) {
        playerScore;
        computerScore;
    } else {
        computerScore++
    }
}



// DISPLAY CONTAINER

const container = document.querySelector('#display-container')
const content = document.createElement('p');
const playerScoreDOM = document.querySelector('#human-score');
const computerScoreDOM = document.querySelector('#computer-score');

const changeScore = (human, computer) => {
    playerScoreDOM.textContent = human;
    computerScoreDOM.textContent = computer;
}


const changeDisplay = (display) => {
    content.textContent = display
    container.appendChild(content)
}

const ask = () => {
    confirm('Want to play Rock Paper Scissors? First to 5 wins!') ? true : window.close();
}

playGame()