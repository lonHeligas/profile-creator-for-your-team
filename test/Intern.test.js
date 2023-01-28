const Intern = require("../lib/Intern.js");

describe('Intern() class', () => {
  it('should update the employee with the intern sub-class', () => {
    expect(new Intern()).not.toBeUndefined();
  });
  it('should accept input for the intern\'s school and return it', () => {
    const intern = new Intern('CORBIN DALLAS', 'multipass', 'theemail', 'larryscabcompany');
    expect(intern.getSchool()).toEqual('larryscabcompany');    
  });
  it('should accept the role as intern', () => {
    const intern = new Intern('CORBIN DALLAS')
    expect (intern.getRole()).toEqual('intern');
  })
})

// todo stick them in an array of interns/employees/managers so they're easier to sort



