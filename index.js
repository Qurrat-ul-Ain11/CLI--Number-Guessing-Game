#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a number
// 2) user input for guessing number
// 3) compare user input with computer generated number and show the result
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6:",
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed right number.");
}
else {
    console.log("Oopss! You could not guess right number.");
}
