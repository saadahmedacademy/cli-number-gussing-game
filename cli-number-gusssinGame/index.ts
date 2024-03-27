#! /usr/bin/env node
import inquirer from 'inquirer';



// to generate random number
const randomNumber = Math.floor(Math.random()*6+1)

//To take the input from user
const answers = await inquirer.prompt(
    [
        {
        message:"Please Gusse a Number Between 1 to 6: ",
        name:"UserGussedNumber",
        type:'number'
        }
    ]
)
// To comparing user input with computer random number
if(answers.UserGussedNumber === randomNumber ){
console.log(`Congratulation! Your number gusse is correct.\n
          Your gusse number is ${answers.UserGussedNumber}
          Computer gusse number is ${randomNumber}`)
}
else if(answers.UserGussedNumber >= 7){
  console.log('You can not enter number grater than 6')
}
else{
  console.log(`Sorry,Your gusse number is not correct\n
  Your gusse number is ${answers.UserGussedNumber}
  Computer gusse number is ${randomNumber}`);
  
}
