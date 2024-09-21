let random_num;
let upperLimit;

function updateDifficulty() {
    const difficulty = document.getElementById('playmode').value;
    
    switch (difficulty) {
        case 'Easy':
            upperLimit = 50;
            break;
        case 'Normal':
            upperLimit = 100;
            break;
        case 'Hard':
            upperLimit = 200;
            break;
        case 'Extreme':
            upperLimit = 500;
            break;
        default:
            upperLimit = 500;
            break;
    }
    
    random_num = Math.floor(Math.random() * (upperLimit + 1));
    document.getElementById('display_number').textContent = `Between 0 to ${upperLimit}`;
}

updateDifficulty();

function checkTheNum() {
    const userGuess = Number(document.getElementById('usrinput').value);
    
    if (userGuess === random_num) {
        alert('Congratulations! You won!');
    } else if (userGuess < random_num) {
        alert('Try entering a bigger number.');
    } else if (userGuess > random_num) {
        alert('Try entering a smaller number.');
    } else {
        alert('Please enter a valid number.');
    }

    document.getElementById('usrinput').value = '';
}

function restartGame() {
    location.reload(); 
}

document.getElementById('playmode').addEventListener('change', updateDifficulty);
document.getElementById('restartbtn').addEventListener('click', restartGame);
