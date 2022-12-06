// bring in all the required libraries 
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "team.html");
const generateTeam = require("./src/template.js")
const chalk = require("chalk");
teamArray = [];



function runApp () {
  console.log(chalk.green("******************************************"));
  console.log(chalk.green("* Welcome to the Team Profile Generator! *"));
  console.log(chalk.green("******************************************"));
  console.log(chalk.green("Let's go ahead and build your team!:"));
  
  //create team 
  function createTeam () {
    addManager()
    .then(
      inquirer.prompt(
        [
          { type: "list",
            message: "What type of employee would you like to add to your team?",
            name: "addEmployeePrompt",
            choices: ["Engineer", "Intern", "No more team members are needed."]
          }
        ])
        .then(function (userInput) {
          switch(userInput.addEmployeePrompt) {
            // case "Manager":
            //   addManager();
            //   break;
            case "Engineer":
              addEngineer();
              break;
            case "Intern":
              addIntern();
              break;
            default:
              htmlBuilder();
          }
        })
    )
  }

// OOP Functions

function addManager() {
  console.log(chalk.yellow("==========="));
  console.log(chalk.yellow("   Manager "));
  console.log(chalk.yellow("==========="));
  inquirer.prompt ([
    
    {
      type: "input",
      name: "managerName",
      message: "What is the manager's name?",
      validate: validateRequired
    },

    {
      type: "input",
      name: "managerId",
      message: "What is the manager's employee ID number?",
      validate: validateRequiredNumber
    },

    {
      type: "input",
      name: "managerEmail",
      message: "What is the manager's email address?",
      validate: validateRequiredEmail
    },

    {
      type: "input",
      name: "managerOfficeNumber",
      message: "What is the manager's office number?",
      validate: validateRequiredNumber
    }

  ]).then(answers => {
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
    teamArray.push(manager);
    createTeam();
  });

}


function addEngineer() {
  console.log(chalk.blue("============="));
    console.log(chalk.blue("   Engineer  "));
    console.log(chalk.blue("============="));
    inquirer.prompt([
      
      {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?",
        validate: validateRequired
       
      },

      {
        type: "input",
        name: "engineerId",
        message: "What is the engineer's employee ID number?",
        validate: validateRequiredNumber
      },

      {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email address?",
        validate: validateRequiredEmail
      },

      {
        type: "input",
        name: "engineerGithub",
        message: "What is the engineer's GitHub username?",
        validate: validateRequired
      }

    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamArray.push(engineer);
      createTeam();
    });

  }

  function addIntern() {
    console.log(chalk.magenta("==========="));
    console.log(chalk.magenta("   Intern  "));
    console.log(chalk.magenta("==========="));
    inquirer.prompt([
      
      {
        type: "input",
        name: "internName",
        message: "What is the intern's name?",
        validate: validateRequired
      },

      {
        type: "input",
        name: "internId",
        message: "What is the intern's employee ID number?",
        validate: validateRequiredNumber
      },

      {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email address?",
        validate: validateRequiredEmail
      },

      {
        type: "input",
        name: "internSchool",
        message: "What school does the intern attend?",
        validate: validateRequired
      }

    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamArray.push(intern);
      createTeam();
    });

  }

  // return to menu with option to add another team member create team

  // Would you like to add a team member?
  // Yes || No
  // If Yes --> Then select an employee role for your new team member: Manager, Engineer, Intern
  // If No --> Create Team


function htmlBuilder () {
    console.log(chalk.red("The HTML has successfully been created in the ./dist/ folder!!!!!"));

    fs.writeFileSync(distPath, generateTeam(teamArray), "UTF-8")

}

createTeam();

}

runApp();





function validateRequired(name) {
  // reject for empty string
  if (name.trim().length <= 0) {
      console.log(chalk.red("\nCannot leave the answer blank!"))
      return false;
  }
  return true;
}

function validateRequiredNumber(id) {
  // reject for empty string
  if (id.trim().length <= 0) {
      console.log(chalk.red("\nCannot leave the answer blank!"))
      return false;
  }
  // reject for non-number
  if (isNaN(id.trim())) {
      console.log(chalk.red("\nA number must be entered!"))
      return false
  }
  return true;
}

function validateRequiredEmail(email)
{
var emailformat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  // reject for empty string
  if (email.trim().length <= 0) {
      console.log(chalk.red("\nCannot leave the answer blank!"))
      return false;
  }
  // reject for invalid email address format
  if(emailformat.test(email.trim())) {
      return true;
  } else {
  console.log(chalk.red("\nThis is not a valid email address!"));
  return false;
  }
}