#! /usr/bin/env node
import inquirer from "inquirer";
let randomNumber = Math.trunc(Math.random() * 100 + 1);
let userAttempt = 0;
let remainAttempt = 10;
let userGuessedNumbers = [];
const askToStart = await inquirer.prompt([
    { message: "\tDo You want to start Number Guessing Game?", name: "askToStart",
        type: "list",
        choices: ["Yes", "No"] }
]);
if (askToStart.askToStart === "Yes") {
    console.log(`\tA Game Number is Generated.\n\tGuess a number and Enter to check:\n\tNote: You have Only 10 Chances.`);
    console.log(``);
    startGame();
}
else {
    console.log(`\n\t---- Game not Started -----`);
}
async function startGame() {
    const answer = await inquirer.prompt([
        { message: "\tGuess the number:", type: "number",
            name: "userGuess" }
    ]);
    let userNumber = answer.userGuess;
    if (userNumber === randomNumber) {
        const message = `YOU WIN! You guessed a RIGHT Number`;
        endGame(message);
        restartGame();
    }
    else if (userNumber < randomNumber) {
        const message = `The number is TOO LOW!`;
        updateScore(message, userNumber);
    }
    else if (userNumber > randomNumber) {
        const message = `The number is TOO HIGH!`;
        updateScore(message, userNumber);
    }
}
async function endGame(message) {
    console.log(``);
    console.log(`\t${message.toUpperCase()}`);
}
async function updateScore(message, userNumber) {
    console.log(`\t ${message}`);
    userAttempt++;
    remainAttempt--;
    userGuessedNumbers.push(userNumber);
    console.log(`Previous Guesses: ${userGuessedNumbers}`);
    console.log(``);
    console.log(`Chances Remainnig: ${remainAttempt}|`);
    if (remainAttempt < 1) {
        let message = `Game Ends. No more chances left.\n\t-----Game Number was ${randomNumber}-----`;
        endGame(message);
        restartGame();
    }
    else {
        startGame();
    }
}
function resetConditions() {
    randomNumber = Math.trunc(Math.random() * 100 + 1);
    userAttempt = 0;
    remainAttempt = 7;
    userGuessedNumbers = [];
}
async function restartGame() {
    const askRestart = await inquirer.prompt([
        { message: "Do You Want to RE-START the Game?",
            name: "askRestart", type: "list", choices: ["Yes", "No"]
        }
    ]);
    if (askRestart.askRestart === "Yes") {
        let message = `Game RE-STARTED`;
        resetConditions();
        endGame(message);
        startGame();
    }
    else {
        let message = `----- Game Not Re-Started -----`;
        endGame(message);
    }
}
