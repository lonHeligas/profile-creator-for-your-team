const Manager = require("../lib/Manager.js");

describe('Manager() class', () => {
  it('should update the employee with the manager sub-class', () =>{expect(new Manager()).not.toBeUndefined();
  });
  it('should accpet input for the office number and return it', () => {
    const manager = new Manager('WILLIAM ADAMA', 'theid', 'theemail', 'bsg75');
    expect(manager.getOfficeNumber()).toBe('bsg75')
  });
  it('should accept the role as manager', () => {
    const manager = new Manager('WILLIAM ADAMA');
    expect(manager.getRole()).toEqual('manager');
  });
})