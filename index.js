// Team Profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Required
const inquirer = require("inquirer");
const fs = require("fs");

// Page Source
const PageTemplate = require("./src/page-template.js")

// Create Prompts 
const prompt = inquirer.createPromptModule();
const teamMembers = [];

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
    .then(() => {
        prompt({
            message: 'Would you like to add more employees?',
            type: 'confirm',
            name: 'addMoreEmployees',
        })
    })
    .then(({ addMoreEmployees }) => {
        if (addMoreEmployees) {
            console.log('Continue');
        } else {
            console.log('Write file');
        }
    })
    .then(() => {
        return prompt({
            type: 'rawlist',
            message: 'What role of employee would you like to add?',
            choices: [
                'Manager',
                'Engineer',
                'Intern',
            ],
            name: 'role',
        })
            .then(({ type }) => {
                switch (type) {
                    case 'Manger': {
                        return prompt(managerQuestions);
                    }
                    case 'Engineer': {
                        return prompt(engineerQuestions);
                    }
                    case 'Intern': {
                        return prompt(internQuestions);
                    }
                }
            })
    });



















// // Make team member
// const chooseEmployeeType = ({ type }) => {
//     let response;
//     switch (type) {
//         case 'Manager': {
//             const response = await prompt(managerQuestions);
//             const { name, id, email, officeNumber } = response;
//             new manager = new Manager(name, id, email, officeNumber);
//             teamMembers.push(manager);
//             break;
//         }
//         case 'Engineer': {
//             const response = await prompt(engineerQuestions);
//             const { name, id, email, gitHub } = response;
//             new engineer = new Engineer(name, id, email, gitHub);
//             teamMembers.push(engineer);
//             break;
//         }
//         case 'Intern': {
//             const response = await prompt(internQuestions);
//             const { name, id, email, school } = response;
//             new intern = new Intern(name, id, email, school);
//             teamMembers.push(intern);
//             break;
//         }
//     }
// };



// // Option to add another employee
// const addMoreEmployees = () => {
//     return prompt({
//         message: 'Would you like to add more employees?',
//         type: 'confirm',
//         name: 'addMore',
//     })
// };

// // Options for adding more employees
// const addMoreEmployees = ({ addMore }) => {
//     if (addMore) {
//         chooseEmployeeType()
//             .then(getEmployeeData)
//             .then(confirmMoreEmployees)
//             .then(addMoreEmployees);
//     } else {
//         const template = pageTemplate(teamMembers);
//         fs.writeFileSync('./dist/team.html', template);
//         console.log('Successfully written to ./dist/team.html');
//         process.exit(0);
//     }
// }

// // prompt(managerQuestions).then(({ name, id, email, officeNumber }) => {
// //     const manager = new Manager(name, id, email, officeNumber);
// //     teamMembers.push(manager);
// //     teamMembers.push(manager);
// // })
// //     .then(confirmMoreEmployees)
// //     .then(({ addMore }) => {
// //         if (addMore) {
// //             console.log('Continue');
// //         } else {
// //             console.log('Write file!');
// //         }
// //     })
// //     .then(() => {
// //         return prompt({
// //             type: 'mainlist',
// //             message: 'What employee type are you adding?',
// //             choices: [
// //                 'Manager',
// //                 'Engineer',
// //                 'Intern',
// //             ],
// //             name: 'type',
// //         })
// //     })
// //     .then(chooseEmployeeType)
// //     .then(confirmMoreEmployees)
// //     .then(addMoreEmployees)

// // Prompt chain
//     .prompt(managerQuestions)
//     .then(chooseManager)
//     .then(confirmMoreEmployees)
//     .then(addMoreEmployees);