// GLOBAL SCOPE VARIABLES
const CHOICES = ['🪨', '📄', '✂️'];
let playerScore = 0;
let computerScore = 0;
let playerChoice = '';
let computerChoice = '';
let display = 'Pick among the choices 🪨 📄 ✂️'

// DOM CONTAINERS & VARIABLES

const container = document.querySelector('#display-container')
const content = document.createElement('p');
const playerScoreDOM = document.querySelector('#human-score');
const computerScoreDOM = document.querySelector('#computer-score');
const buttons = document.querySelector('#button-container');
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

// PLAYER AND COMPUTER CHOICE FUNCTION
const getComputerChoice = () => {
    const num = Math.round(Math.random()*2);
    computerChoice = CHOICES[num];
}

const getPlayerChoice = () => {
    buttons.addEventListener('click', (event) => {
        let target = event.target;

        switch(target.id) {
            case 'rock':
                playerChoice = CHOICES[0];
                break;
            case 'paper':
                playerChoice = CHOICES[1];
                break;
            case 'scissors':
                playerChoice = CHOICES[2];
                break;
        }
        playRound();
    })
}

getPlayerChoice()

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

const checkWinner = (player, computer) => {
    if (playerScore == 5 || computerScore == 5) {
        announceWinner(playerScore, computerScore)
    }
}

// DOM CHANGING FUNCTIONS

const changeScore = (human, computer) => {
    playerScoreDOM.textContent = human;
    computerScoreDOM.textContent = computer;
}

const changeDisplay = (display) => {
    content.textContent = display
    container.appendChild(content)
}


// ENTER AND EXIT FUNCTIONS

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
