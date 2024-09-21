function getRandomNumber(limit){
    return Math.floor(Math.random() * limit);
}


document.getElementById('playmode').addEventListener('change', function() {
    const selectedDifficulty = this.value;
    const displayNumber = document.getElementById('display_number');

    switch (selectedDifficulty) {
        case 'Easy':
            displayNumber.textContent = 'Between 0 to 50';
            break;
        case 'Normal':
            displayNumber.textContent = 'Between 0 to 100';
            break;
        case 'Hard':
            displayNumber.textContent = 'Between 0-200';
            break;
        default:
            displayNumber.textContent = 'Between 0-500';
            break;
    }
});


// const gussed_number;
// let limit;
// let random_Number = getRandomNumber(limit)
