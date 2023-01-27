const Employee = require("../lib/Employee.js");


describe('Employee() class', () => {
  it('should construct an employee', () => {  
    expect(new Employee()).not.toBeUndefined();    
  })   
  it('should accept input for the name and return it', () => { 
    const employee = new Employee('STACKER PENTACOST', 'theid', 'theemail'); 
    expect(employee.getName()).toBe('STACKER PENTACOST')
  });
  it('accept input for the id and return it', () => {
    const employee = new Employee('CORBIN DALLAS', 'multipass', 'theemail');
    expect(employee.getID()).toEqual('multipass'); 
  });
  it.only('accept input for the email and return it', () => {
    const employee = new Employee('KARA THRACE', 'bsg', 'newcaprica');
    expect(employee.getEmail()).toEqual('newcaprica');
  });
  it('accept input for the role and return it', () =>{     
    const employee = new Employee('CHRISTOPHER PIKE', 'captain', 'hotterthankirk@spacemail.com');
    expect(employee.getRole()).toEqual('employee');     
  })
})
