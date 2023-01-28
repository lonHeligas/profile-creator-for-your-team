// todo things the Engieer class gets
// todo github username
const Employee = require('./employee');

class Engineer extends Employee {
    constructor( github ){
      this.github = github
    }
    getGithub(){
      return this.github;
    }
}