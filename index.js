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
    },
    {
      type: 'imput',
      message: 'What\'s your office number?',
      name: 'office',
      validate: (response) => {
        if (response === ''){
          return 'You still need to provide your office number, please.'
          
          }
          return true
        }        
    },  
  ]).then(answersObj => {
    const { name, id, email, office } = answersObj;
    teamRoster.push( new Manager( name, id, email, office)); 

    whichRole();


    
    
    
    
    
    
    
    // * console.log(teamRoster)
    // * console.log(answersObj)
    // * console.log(answersObj.name);
    // * console.log(answersObj.id);
    // * console.log(answersObj.email);


    
  })
  addEmployee()
}

// asks if you want to enter an employee's data (this is skipped the first time)
function addEmployee(){

}


// asks which role you want to enter
function whichRole(){
  inquirer
  .prompt([
    {
      type: 'list',
      message: 'Would you like to add an Engineer or an Intern to your roster?',
      choices: [
        {name: 'engineer', value: "Engineer"},
        {name: 'intern', value: 'Intern'},
    ],
    }    
  ]).then(answerObj => {
    if (answerObj = 'engineer') {
      addEngineerData();
    } else if (answerObj = 'intern') {
      addInternData();
    }
  })
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
    // * console.log(answers.team);
    // * console.log(teamName);
    enterManagerData();
  })
  
};




start();
