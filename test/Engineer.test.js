const Engineer = require("../lib/Engineer.js");

describe('Engineer() class', () => {
  it.todo('should update the employee with the engineer sub-class', () => {
    expect(new Engineer()).not.toBeUndefined()
  })
  it('should accept input for the github username and return it', () => {
    const engineer = new Engineer('stackerPentacost');
    expect(engineer.getgithub()).toBe('stackerPentacost')    
  })
  it.todo('should accept the role as engineer', () => {
    const engineer = new Engineer('CORBIN DALLAS')
  })
});