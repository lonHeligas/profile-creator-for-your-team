// todo things the Engieer class gets
// todo github username
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor( name, id, email, github ){   
      super( name, id, email, "engineer");
      this.github = github            
    }
    getGithub(){
      return this.github;
    }    
}

module.exports = Engineer;