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
let additionalHTML = ""
let teamHTML = "";

// ? do I need these two below?
let engRoster = [];
let internRoster = [];

let isFirstRun = true;

// let currentEmployee = [];



/*
dummy data
*/

basicQuestions = () => [
  {
    type: 'input',
    message: `What\'s ${isFirstRun?'your':'the employee\'s'} name?`,
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
    message: `What\'s ${isFirstRun?'your':'the employee\'s'} ID number?`,
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
    message: `What\'s ${isFirstRun?'your':'the employee\'s'} email address?`,
    name: 'email',
    validate: (response) => {
      if (response === ''){
        return 'You still need to provide an email address, please.'
      }
      return true
    }    
  }  
]



// enters the manager's data.
function enterManagerData(){
  inquirer
  .prompt( [...basicQuestions(),
    {
      type: 'input',
      message: 'What\'s your office number?',
      name: 'office',
      validate: (response) => {
        if (response === ''){
          return 'You still need to provide an office number, please.'
        }
        return true
      }    
    },
  ]).then(answersObj => {
    const { name, id, email, office } = answersObj;
    teamRoster.push( new Manager( name, id, email, office)); 
    
    // * console.log(teamRoster)
    // * console.log(answersObj)
    // * console.log(answersObj.name);
    // * console.log(answersObj.id);
    // * console.log(answersObj.email);

    // * sets the var to false so it asks a different name question for the engineer/intern employees
    isFirstRun = false;
    whichRole();
  });  
}


// asks which role you want to enter
function whichRole(){  
  inquirer
  .prompt([
    {
      type: 'list',
      message: 'Would you like to add an Engineer or an Intern to your roster?',
      name: 'choice',
      choices: [
        {name: 'Engineer', value: 'engineer'},
        {name: 'Intern', value: 'intern'},
    ],
  }
  ]).then(answerObj => {
    console.log(answerObj);
    if (answerObj.choice == 'engineer') { // Y U NO DOUBLE EQUALS
      // * console.log('You want to enter an Engineer')
      addEngineerData();
    } else if (answerObj.choice == 'intern') { // Y U NO DOUBLE EQUALS
      // * console.log('You want to enter an Intern')
      addInternData();
    }
  })
}

// adds an Engineer to the array
  
  function addEngineerData(){
  // * console.log('you are at addEngineerData');
  inquirer
  .prompt([...basicQuestions(),  
    {
      type: 'input',
      message: 'What\'s your new engineer\'s gitHub username?',
      name: 'github',
      validate: (response) => {
        if (response === ''){
          return 'You still need to provide your engineer\'s gitHub username, please.'          
          }
          return true
        }  
    }
  ]).then(answersObj => {
    const { name, id, email, github } = answersObj;
    teamRoster.push( new Engineer( name, id, email, github));
    // * console.log(teamRoster);
    addAnotherEmployee();
  })
}

// adds an intern to the data
function addInternData(){
  // * console.log('you are at addInternData');
  inquirer
  .prompt([...basicQuestions(),  
    {
      type: 'input',
      message: 'What\'s your new intern\'s attended school?',
      name: 'school',
      validate: (response) => {
        if (response === ''){
          return 'You still need to provide your intern\'s attended school, please.'          
          }
          return true
        }  
    }
  ]).then(answersObj => {
    const { name, id, email, school } = answersObj;
    teamRoster.push( new Intern( name, id, email, school));
    // * console.log(teamRoster);
    addAnotherEmployee();
  })
}

// asks if the user wants to add another employee

function addAnotherEmployee(){
  inquirer
  .prompt(
    {
      type: 'confirm',
      message: 'Would you like to enter another employee?',
      name: 'continue',
    }
  ).then(answerObj => {
    if (answerObj.continue) {
      whichRole();
    } else {
      renderHTMLPage(teamRoster);
    }
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



function renderHTMLPage(data){

  // * console.log(data);
  // * console.log(teamRoster);

  teamHTML = `<h1>${teamName}</h1>
  <div class="card">
  <div class="container">
    <h2>${data[0].getName()}</h2>
    <h2>👓 Manager</h2>
    </div>
  <div class="container">
    <h3>ID: ${data[0].getID()}</h3>
    <h3>Email: ${data[0].getEmail()}</h3>
    <h3>Office number: ${data[0].getOfficeNumber()}</h3>
  </div>
</div>`

  // * console.log(teamHTML);

  // removes the manager from the data array to build out the remainder of the array in html
  const dataCropped = data.slice(1);  
  
  // * console.log(dataCropped)

  dataCropped.forEach(element => {
    if (element.role === 'engineer') {
      additionalHTML = `<div class="card">
<div class="container">
  <h2>${element.getName()}</h2>
  <h2>⚙ Engineer</h2>
  </div>
<div class="container">
  <h3>ID: ${element.getID()}</h3>
  <h3>Email: ${element.getEmail()}</h3>
  <h3>GitHub: ${element.getGithub()}</h3>
</div>
</div>
`
    // adds the sring to the html
      teamHTML = teamHTML + additionalHTML;
      // clears out the string for further processing
      additionalHTML = ""
      // * console.log(teamHTML);
      // * console.log(`additionalHTML = ${additionalHTML}`);

    } else {

      additionalHTML = `<div class="card">
<div class="container">
  <h2>${element.getName()}</h2>
  <h2>🎓 Intern</h2>
  </div>
<div class="container">
  <h3>ID: ${element.getID()}</h3>
  <h3>Email: ${element.getEmail()}</h3>
  <h3>School: ${element.getSchool()}</h3>
</div>
</div>
`
      teamHTML = teamHTML + additionalHTML;
      additionalHTML = ""
      // console.log(teamHTML);
      // console.log(`additionalHTML = ${additionalHTML}`);
    }
  }) 
  functionWriteToFile()
}

function functionWriteToFile(){
  const frontHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team ${teamName}</title>
  <link
  href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
  rel="stylesheet"
/>
<link rel="stylesheet" href="./styles.css" />
</head>
<body>
`;
  const endHTML = `</body>
</html>`;

  // assembles the full HTML file

  fullHTML = frontHTML + teamHTML + endHTML;
  console.log(fullHTML);



  fs.writeFile(`./dist/${teamName}.html`, fullHTML, (err) => {
    err ? console.log(err) : consolelog(`Your team ${teamName} has been created in the 'dist' folder. Grab that and the CSS file.`);
  }, 
  )
}

start();
