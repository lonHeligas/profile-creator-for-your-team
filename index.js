const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
let teamName = "";
let teamRoster = [];
let engRoster = [];
let internRoster = [];



/*
dummy data
*/

function enterManagerData(){
  inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "manager",
    },
    {
      type: "input",
      message: "What is your ID number?",
      name: "idnum",
    }
  ])
  
  
  
  
  
  addEmployee()
}

function addEmployee(){

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
      name: "team", 
      // validate: (response) => {
      //   if (response === ''){
      //     return 'You still need to provide a name for your team.'
      //   }
      //   return true
      // }     
    },    
  ]).then(answers => {
    teamName = answers.team;
    console.log(answers.team);
    console.log(teamName);
  })
  enterManagerData();
  
};




start();
