// todo things the Intern class gets
// todo school

const Employee = require('./Employee');

class Intern extends Employee {
  constructor( name, id, email, school ){
    super( name, id, email, "intern");
    this.school = school;        
  }

  getSchool(){
    return this.school;
  }
}

module.exports = Intern;