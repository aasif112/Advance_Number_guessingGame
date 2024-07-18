#! /usr/bin/env node


import inquirer from "inquirer"

//  1) Generate a random number in code.
// 2) Get an input number from user
// 3) Check user number and show result.

const compGuess = Math.trunc(Math.random()* 6 + 1)

const answer = await inquirer.prompt([
    {
        message:"Guess a number between 1 and 6 and Enter to check:",
        type:"number",
        name:"userGuess"
    }
])

// Made random-number range from 1-6
// Add Check if condition: To check user enter valid number in given rang:
// If user a One less or One more number the show message:

if(isNaN(answer.userGuess) || answer.userGuess<1 || answer.userGuess>6) {
    console.log('Please enter a valid number from 1-6')
} else {
    if(answer.userGuess === compGuess) {
        console.log('You Guessed the RIGHT number.')
    } 
    else if((answer.userGuess-1) === compGuess || (answer.userGuess+1) === compGuess) {
            console.log('You NEARLY MISSED the number')
        }
    else {
        console.log('You Guessed a WRONG number.')
    }
}



