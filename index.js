// Team Profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Modules
const inquirer = require("inquirer");
const fs = require("fs");

// Page Creation
const generateHTML = require("./src/page-template.js")

// Create Questionaire
const prompt = inquirer.createPromptModule();
const teamMembers = [];

// Make team member
const chooseEmployeeType = ({ type }) => {
    let response;
    switch (type) {
        case 'Manager': {
            const response = await prompt(managerQuestions);
            const { name, id, email, officeNumber } = response;
            new manager = new Manager(name, id, email, officeNumber);
            teamMembers.push(manager);
            break;
        }
        case 'Engineer': {
            const response = await prompt(engineerQuestions);
            const { name, id, email, gitHub } = response;
            new engineer = new Engineer(name, id, email, gitHub);
            teamMembers.push(engineer);
            break;
        }
        case 'Intern': {
            const response = await prompt(internQuestions);
            const { name, id, email, school } = response;
            new intern = new Intern(name, id, email, school);
            teamMembers.push(intern);
            break;
        }
    }
};

// Questions
// Manager
const managerQuestions = [
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
]
// Engineer
const engineerQuestions = [
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
]
// Intern
const internQuestions = [
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
]

// Prompts
prompt(managerQuestions).then(({ name, id, email, officeNumber }) => {
    const manager = new Manager(name, id, email, officeNumber);
    teamMembers.push(manager);
    teamMembers.push(manager);
})
    .then(() => {
        prompt({
            message: 'Would you like to add more employees?',
            type: 'confirm',
            name: 'addMore',
        })
    })
    .then(({ addMore }) => {
        if (addMore) {
            console.log('Continue');
        } else {
            console.log('Write file');
        }
    })
    .then(() => {
        return prompt({
            type: 'mainlist',
            message: 'What employee type are you adding?',
            choices: [
                'Manager',
                'Engineer',
                'Intern',
            ],
            name: 'type',
        })
    })
    .then(chooseEmployeeType)
    .then((data) => {
        const employee = new ;
        teamMembers(employee);
    });