#! /usr/bin/env node
import inquirer from "inquirer"
// 1) computer will generate a number

// 2) user input for guessing number

// 3) compare computer generated number and user input and show result
const randomNumber = Math.floor(Math.random()*10+1);


const answer = await inquirer.prompt([
    {
        name:"UserGuessNumber",
    type:"number",
    message:"\nplease guess a number between 1 to 6",
    },
])

if(answer.UserGuessNumber===randomNumber){
    console.log(`\ncongradulations! you guess right number!`)
}else{
    console.log(`\nyou guess wrong number!`)
}
