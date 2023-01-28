// todo things the Employee class gets
// todo Name
// todo ID
// todo email
// todo Type of Employee (manager / engineer / intern)

class Employee {
  constructor(name, id, email, role){
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
    
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
    return this.role;
  }
}

module.exports = Employee;


