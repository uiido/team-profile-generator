// Team Profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Required
const inquirer = require("inquirer");
const fs = require("fs");

// Page Source
const pageTemplate = require("./src/page-template.js")

// Create Prompts 
const prompt = inquirer.createPromptModule();
const teamMembers = [];

// Confirmation of new employees function
const moreEmployeesConfirm = () => {
    return prompt({
        message: 'Would you like to add more employees?',
        type: 'confirm',
        name: 'addMoreEmployees',
    })
};

// Reloops or writes page
const finalize = ({ addMoreEmployees }) => {
    if (addMoreEmployees) {
        chooseEmployeeType()
            .then(employeeGenerate)
            .then(moreEmployeesConfirm)
            .then(finalize);
    } else {
        console.log('Your team page has been written!');
        const template = pageTemplate(teamMembers);
        fs.writeFileSync('./dist/team.html', template);
    }
};

// Selects employee type
const chooseEmployeeType = () => {
    return prompt({
        type: 'rawlist',
        message: 'What role of employee would you like to add?',
        choices: [
            'Manager',
            'Engineer',
            'Intern',
        ],
        name: 'type',
    })
};

// Add more employees of x type function
const employeeGenerate = async ({ type }) => {
    switch (type) {
        case 'Manager': {
            const response = await prompt(managerQuestions);
            const { name, id, email, officeNumber } = response;
            const manager = new Manager(name, id, email, officeNumber);
            teamMembers.push(manager);
            break;
        }
        case 'Engineer': {
            const response = await prompt(engineerQuestions);
            const { name, id, email, gitHub } = response;
            const engineer = new Engineer(name, id, email, gitHub);
            teamMembers.push(engineer);
            break;
        }
        case 'Intern': {
            const response = await prompt(internQuestions);
            const { name, id, email, school } = response;
            const intern = new Intern(name, id, email, school);
            teamMembers.push(intern);
            break;
        }
    }
};

// Questions
const managerQuestions = [
    {
        message: 'What is the manager\'s name?',
        name: 'name',
    },
    {
        message: 'What is the manager\'s id?',
        name: 'id',
    },
    {
        message: 'What is the manager\'s email?',
        name: 'email',
    },
    {
        message: 'What is the manager\'s office number?',
        name: 'officeNumber',
    },
];
const engineerQuestions = [
    {
        message: 'What is the engineer\'s name?',
        name: 'name',
    },
    {
        message: 'What is the engineer\'s id?',
        name: 'id',
    },
    {
        message: 'What is the engineer\'s email?',
        name: 'email',
    },
    {
        message: 'What is the engineer\'s GitHub?',
        name: 'gitHub',
    },
];
const internQuestions = [
    {
        message: 'What is the intern\'s name?',
        name: 'name',
    },
    {
        message: 'What is the intern\'s id?',
        name: 'id',
    },
    {
        message: 'What is the intern\'s email?',
        name: 'email',
    },
    {
        message: 'What is the intern\'s school?',
        name: 'school',
    },
];

// Prompt system
prompt(managerQuestions)
    .then(({ name, id, email, officeNumber }) => {
        const manager = new Manager(name, id, email, officeNumber);
        teamMembers.push(manager);
    })
    .then(moreEmployeesConfirm)
    .then(finalize)