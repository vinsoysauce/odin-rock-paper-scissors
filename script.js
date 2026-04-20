const getComputerChoice= () => {
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

