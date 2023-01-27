// todo things the Employee class gets
// todo Name
// todo ID
// todo email
// todo Type of Employee (manager / engineer / intern)

class Employee {
  constructor(name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;
    
  }
  getName(){
    return this.name;
  }

  getID(){
    return this.id;
  }

  getEmail(){
    return this.email;
  }

  getRole(){
    return "employee";
  }




  
}

module.exports = Employee;


