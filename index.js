const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "your-team.html");
const generateTeam = require("./src/page-template.js")



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


// Engineer


// Intern