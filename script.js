// Variables
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 10;

// DOM Elements
const feedback = document.getElementById('feedback');
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const attemptsLeftDisplay = document.getElementById('attemptsLeft');

// display Update attempts left 
attemptsLeftDisplay.textContent = `Attempts Left: ${attemptsLeft}`;

// Event Listener
guessButton.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedback.textContent = 'Please enter a valid number between 1 and 100.';
        feedback.classList.add('text-red-500');
        return;
    }

    attemptsLeft--;
    attemptsLeftDisplay.textContent = `Attempts Left: ${attemptsLeft}`;

    if (userGuess === secretNumber) {
        feedback.textContent = 'Congratulations! You guessed the correct number!';
        feedback.classList.add('text-green-500');
        guessButton.disabled = true;
    } else if (attemptsLeft === 0) {
        feedback.textContent = `Sorry, you've run out of attempts. The correct number was ${secretNumber}.`;
        feedback.classList.add('text-red-500');
        guessButton.disabled = true;
    } else if (userGuess > secretNumber) {
        feedback.textContent = 'Too high! Try again.';
        feedback.classList.add('text-yellow-500');
    } else {
        feedback.textContent = 'Too low! Try again.';
        feedback.classList.add('text-yellow-500');
    }

    guessInput.value = '';
});


guessInput.addEventListener('input', () => {
    feedback.classList.remove('text-red-500', 'text-green-500', 'text-yellow-500');
    feedback.textContent = '';
});
