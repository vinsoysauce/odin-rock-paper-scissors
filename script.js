// GLOBAL SCOPE VARIABLES
const CHOICES = ['🪨', '📄', '✂️'];
let playerScore = 0;
let computerScore = 0;
let playerChoice = '';
let computerChoice = '';
let display = 'Pick among the choices 🪨 📄 ✂️'

// DOM CONTAINERS

const container = document.querySelector('#display-container')
const content = document.createElement('p');
const playerScoreDOM = document.querySelector('#human-score');
const computerScoreDOM = document.querySelector('#computer-score');
content.textContent = display;
container.appendChild(content)


// PLAY ROUND & GAME FUNCTION
function playGame() {  
    ask()
    getPlayerChoice()
}

function playRound() {
    getComputerChoice()
    announceChoice(playerChoice, computerChoice)
    winOrLose(playerChoice, computerChoice)
    changeScore(playerScore, computerScore)
    checkWinner(playerScore, computerScore)
}

// // HUMAN AND COMPUTER CHOICE FUNCTION
const getComputerChoice = () => {
    const num = Math.round(Math.random()*2);
    computerChoice = CHOICES[num];
}

const getPlayerChoice = () => {
    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector('#scissors');

    rock.addEventListener('click', () => {
        playerChoice = '🪨';
        playRound();
    })
    paper.addEventListener('click', () => {
        playerChoice = '📄';
        playRound();
    })
    scissors.addEventListener('click', () => {
        playerChoice = '✂️';
        playRound();
    })
}


// ANNOUNCE CHOICE & SCORE FUNCTION
const announceChoice = (player, computer) => {
    display = `😀 choice is ${player} vs 🤖 choice ${computer}`
    changeDisplay(display);
}

const announceWinner = (player, computer) => {
    if (playerScore === 5) {
        alert('CONGRATULATIONS! YOU WON!');
    } else {
        alert('BETTER LUCK NEXT TIME! COMPUTER WON!');
    }
    playAgain() 
}

const checkWinner = (player, computer) => {
    if (playerScore == 5 || computerScore == 5) {
        announceWinner(playerScore, computerScore)
    }
}

// WIN LOSE FUNCTIONS

const winOrLose = (player, computer) => {
    if ((player === '🪨' && computer === '✂️') ||
        (player === '📄' && computer === '🪨') ||
        (player === '✂️' && computer === '📄'))
        playerScore++
    else if (player === computer) {
        playerScore;
        computerScore;
    } else {
        computerScore++
    }
}

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

const playAgain = () => {
    if (confirm('Want to play again?')) {
        playerScore = 0;
        computerScore = 0;
        changeScore()
    } else {
        window.close();
    } 
}

playGame()