const Engineer = require("../lib/Engineer.js");

describe('Engineer() class', () => {
  it('should update the employee with the engineer sub-class', () => {
    expect(new Engineer()).not.toBeUndefined()
  })
  it('should accept input for the github username and return it', () => {
    const engineer = new Engineer('STACKER PENTACOST', 'theid', 'theemail', 'stackerPentacost');
    expect(engineer.getGithub()).toBe('stackerPentacost')    
  })
  it('should accept the role as engineer', () => {
    const engineer = new Engineer('CORBIN DALLAS')
    expect(engineer.getRole()).toEqual('engineer');
  })
});

