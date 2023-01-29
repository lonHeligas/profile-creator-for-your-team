// todo things the Manager class gets
// todo office number

const Employee = require('./Employee');

class Manager extends Employee {
  constructor( name, id, email, office ){
    super( name, id, email, "manager");
    this.office = office
  }

  getOfficeNumber(){
    return this.office;
  }
}

module.exports = Manager

// const manager = new Manager('WILLIAM ADAMA', 'theid', 'theemail', 'bsg75');
