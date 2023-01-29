const fs = require('fs');
const inquirer = require('inquirer');

// classes
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// arrays and other variables
let teamName = "";
let teamRoster = [];
let engRoster = [];
let internRoster = [];
let currentEmployee = [];



/*
dummy data
*/
// enters the manager's data.
function enterManagerData(){
  inquirer
  .prompt([
    {
      type: 'input',
      message: 'What\'s your name?',
      name: 'name',
      validate: (response) => {
        if (response === ''){
          return 'You still need to provide a name, please.'
        }
        return true
      }     
    },
    {
      type: 'input',
      message: 'What\'s your ID number?',
      name: 'id',
      validate: (response) => {
        if (response === ''){
          return 'You still need to provide an ID number, please.'
        }
        return true
      }    
    },
    {
      type: 'input',
      message: 'What\'s your email address?',
      name: 'email',
      validate: (response) => {
        if (response === ''){
          return 'You still need to provide an email address, please.'
        }
        return true
      }    
    }
  ]).then(answersObj => {
    const { name, id, email, } = answersObj;
    
    console.log(answersObj)
    // * console.log(answers.name);
    // * console.log(answers.id);
    // * console.log(answers.email);


    
  })
  addEmployee()
}

// asks if you want to enter an employee's data (this is skipped the first time)
function addEmployee(){
}


// asks which role you want to enter
function whichRole(){
}

// adds the employee data, then branches to enginer or intern
function addEmployeeData(){
}

function addInternData(){
  
}

function addEngineerData(){
}

function renderHTMLPage(){

}


function start(){
  // console.log(`testing`)
  inquirer
  .prompt([
    {
      type: 'input',
      message: 'Welcome to your Team Profile Builder! What\'s the name of your team?',
      name: 'team', 
      validate: (response) => {
        if (response === ''){
          return 'You still need to provide a name for your team.'
        }
        return true
      }     
    },    
  ]).then(answersObj => {
    teamName = answersObj.team;
    // console.log(answers.team);
    // console.log(teamName);
    enterManagerData();
  })
  
};




start();
