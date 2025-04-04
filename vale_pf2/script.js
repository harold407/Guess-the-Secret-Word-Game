const secretWords = ["apple", "banana", "mango", "grape", "peach", "kiwi", "orange"];
let secretWord = secretWords[Math.floor(Math.random() * secretWords.length)];
let attemptsLeft = 5;

console.log("Secret Word for Testing: ", secretWord); // For testing purposes

const info = document.getElementById("info");
const hint = document.getElementById("hint");
const guessInput = document.getElementById("guessInput");
const submitGuess = document.getElementById("submitGuess");
const playAgain = document.getElementById("playAgain");
const message = document.getElementById("message");
const attempts = document.getElementById("attempts");

hint.textContent = `The word starts with '${secretWord.charAt(0).toUpperCase()}'`;

submitGuess.addEventListener("click", () => {
    const userGuess = guessInput.value.trim().toLowerCase();
    
    if (userGuess === "") {
        message.textContent = "Incorrect guess. You have " + attemptsLeft + " attempts left. Try again!";
        return;
    }

    if (userGuess === secretWord) {
        message.textContent = "Congratulations! You guessed the secret word!";
        playAgain.style.display = "block";
        submitGuess.disabled = true;
    } else {
        attemptsLeft--;
        if (attemptsLeft > 0) {
            message.textContent = "Incorrect guess. You have " + attemptsLeft + " attempts left. Try again!";
        } else {
            message.textContent = "Game over! The secret word was '" + secretWord + "'.";
            playAgain.style.display = "block";
            submitGuess.disabled = true;
        }
    }
    attempts.textContent = "Attempts left: " + attemptsLeft;
    guessInput.value = "";
});

playAgain.addEventListener("click", () => {
    secretWord = secretWords[Math.floor(Math.random() * secretWords.length)];
    attemptsLeft = 5;
    message.textContent = "";
    attempts.textContent = "";
    hint.textContent = `The word starts with '${secretWord.charAt(0).toUpperCase()}'`;
    playAgain.style.display = "none";
    submitGuess.disabled = false;
});