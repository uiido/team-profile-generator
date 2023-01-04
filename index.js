// Team Profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Modules
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Page Creation
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "your-team.html");
const generateTeam = require("./src/page-template.js")

// Array
teamArray = [];

// Gathers all questions into one function
function buildTeam() {

    // Questions to build a team and fill in their information
    function newTeam() {
        inquirer.prompt([{
            type: "list",
            message: "What position are you adding?",
            name: "addEmployeePrompt",
            choices: ["Manager", "Engineer", "Intern", "My team is complete!"]
        }]).then(function (userInput) {
            switch (userInput.addEmployeePrompt) {
                case "Manager":
                    addManager();
                    break;
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
            }

        })
    }

    // Manager
    function addManager() {
        inquirer.prompt([

            {
                type: "input",
                name: "managerName",
                message: "What is this manager's first name?"
            },

            {
                type: "input",
                name: "managerId",
                message: "What is this manager's employee ID number?"
            },

            {
                type: "input",
                name: "managerEmail",
                message: "What is this manager's email address?"
            },

            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is this manager's office number?"
            }

        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamArray.push(manager);
        });
    }

    // Engineer
    function addEngineer() {
        inquirer.prompt([

            {
                type: "input",
                name: "engineerName",
                message: "What is this engineer's name?"
            },

            {
                type: "input",
                name: "engineerId",
                message: "What is this engineer's employee ID number?"
            },

            {
                type: "input",
                name: "engineerEmail",
                message: "What is this engineer's email address?"
            },

            {
                type: "input",
                name: "engineerGithub",
                message: "What is this engineer's GitHub username?"
            }

        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamArray.push(engineer);
        });
    }

    // Intern
    function addIntern() {
        inquirer.prompt([

            {
                type: "input",
                name: "internName",
                message: "What is this intern's name?"
            },

            {
                type: "input",
                name: "internId",
                message: "What is this intern's employee ID number?"
            },

            {
                type: "input",
                name: "internEmail",
                message: "What is this intern's email address?"
            },

            {
                type: "input",
                name: "internSchool",
                message: "What school does this intern attend?"
            }

        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamArray.push(intern);
        });
    }

};