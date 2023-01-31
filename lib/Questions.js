class Questions {
  constructor(role) {
    this.role = role;
    this.questions = [
      {
        type: "input",
        message: `What\'s the ${this.role}'s name?`,
        name: "name",
        validate: (response) => {
          if (response === "") {
            return "You still need to provide a name, please.";
          }
          return true;
        },
      },
      {
        type: "input",
        message: `What\'s ${this.role}'s ID number?`,
        name: "id",
        validate: (response) => {
          if (response === "") {
            return "You still need to provide an ID number, please.";
          }
          return true;
        },
      },
      {
        type: "input",
        message: `What\'s ${this.role}'s email address?`,
        name: "email",
        validate: (response) => {
          if (response === "") {
            return "You still need to provide an email address, please.";
          }
          return true;
        },
      },
    ];
  }

  getLastQuestion() {
    switch (this.role) {
      case "manager":
        this.questions.push({
          type: "input",
          message: "What's your office number?",
          name: "office",
          validate: (response) => {
            if (response === "") {
              return "You still need to provide an office number, please.";
            }
            return true;
          },
        });
        return this.questions;
        break;
      case "engineer":
        this.questions.push({
          type: "input",
          message: "What's your new engineer's gitHub username?",
          name: "github",
          validate: (response) => {
            if (response === "") {
              return "You still need to provide your engineer's gitHub username, please.";
            }
            return true;
          },
        });
        return this.questions;

        break;
      default:
        this.questions.push({
          type: "input",
          message: "What's your new intern's attended school?",
          name: "school",
          validate: (response) => {
            if (response === "") {
              return "You still need to provide your intern's attended school, please.";
            }
            return true;
          },
        });
        return this.questions;

        break;
    }
  }
}


module.exports = Questions