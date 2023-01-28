const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
let teamName = "";


/*
dummy data
*/

function enterManagerData(){

}



function whichRole(){

}



function start(){
  // console.log(`testing`)
  inquirer
  .prompt([
    {
      type: "input",
      message: "Welcome to your Team Profile Builder! What's the name of your team?",
      name: "teamName", 
      // validate: (response) => {
      //   if (response === ''){
      //     return 'You still need to provide a name for your team.'
      //   }
      //   return true
      // }     
    },    
  ])

  console.log(response.name);
  
};




start();
