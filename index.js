const fs = require('fs');
const inquirer = require('inquirer');

// classes
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Questions = require("./lib/Questions");
const htmlTemplate = require('./src/htmlTemplate');
// arrays and other variables
let teamName = "";
let teamRoster = [];
let additionalHTML = ""
let teamHTML = "";

// enters the manager's data.
function enterManagerData(){
  inquirer
  .prompt(new Questions("manager").getLastQuestion()).then(answersObj => {
    const { name, id, email, office } = answersObj;
    teamRoster.push( new Manager( name, id, email, office)); 
    menu();
  });  
}


// asks which role you want to enter
function menu(){  
  inquirer
  .prompt([
    {
      type: 'list',
      message: 'Would you like to add an Engineer, add an Intern, or create a team html page? to your roster?',
      name: 'choice',
      choices: [
        {name: 'Engineer', value: 'engineer'},
        {name: 'Intern', value: 'intern'},
        {name: "Build HTML", value: "Create Team"}
    ],
  } 
  ]).then(answerObj => {
    // console.log(answerObj);
    if (answerObj.choice == 'engineer') { 
     
      console.log('You have chosen to enter an Engineer')
      addEngineerData();
    } else if (answerObj.choice == 'intern') { 
      console.log('You have chosen to enter an Intern')
      addInternData();
    }
    else {
      renderHTMLPage()
    }
  })
}

// adds an Engineer to the array
  
  function addEngineerData(){
  // * console.log('you are at addEngineerData');
  inquirer
  .prompt(new Questions("engineer").getLastQuestion()).then(answersObj => {
    const { name, id, email, github } = answersObj;
    teamRoster.push( new Engineer( name, id, email, github));
    // * console.log(teamRoster);
    menu();
  })
}

// adds an intern to the data
function addInternData(){
  // * console.log('you are at addInternData');
  inquirer
  .prompt(new Questions("intern").getLastQuestion()).then(answersObj => {
    const { name, id, email, school } = answersObj;
    teamRoster.push( new Intern( name, id, email, school));
    // * console.log(teamRoster);
    menu();
  })
}

function start(){
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



function renderHTMLPage(){
  fs.writeFile(`./dist/team.html`, htmlTemplate(teamRoster,teamName), (err) => {
    err ? console.log(err) : console.log(`Your team ${teamName} has been created in the 'dist' folder. Grab that and the CSS file.`);
  }, 
  )
}

start();
