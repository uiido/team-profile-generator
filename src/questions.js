// Questions
// Manager
const managerQuestions = [
    {
        type: "input",
        name: "managerName",
        message: "What is this manager's first name?",
        default: "Sophie",
    },
    {
        type: "input",
        name: "managerId",
        message: "What is this manager's employee ID number?",
        default: "123",
    },

    {
        type: "input",
        name: "managerEmail",
        message: "What is this manager's email address?",
        default: "hatter@castle.com",
    },

    {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is this manager's office number?",
        default: "1",
    }
];

// Engineer
const engineerQuestions = [
    {
        type: "input",
        name: "engineerName",
        message: "What is this engineer's name?",
        default: "Howl",
    },

    {
        type: "input",
        name: "engineerId",
        message: "What is this engineer's employee ID number?",
        default: "213",
    },

    {
        type: "input",
        name: "engineerEmail",
        message: "What is this engineer's email address?",
        default: "pendragon@castle.com",
    },

    {
        type: "input",
        name: "engineerGithub",
        message: "What is this engineer's GitHub username?",
        default: "welshrugby",
    }
];

// Intern
const internQuestions = [
    {
        type: "input",
        name: "internName",
        message: "What is this intern's name?",
        default: "Michael",
    },

    {
        type: "input",
        name: "internId",
        message: "What is this intern's employee ID number?",
        default: "312",
    },

    {
        type: "input",
        name: "internEmail",
        message: "What is this intern's email address?",
        default: "fisher@castle.com",
    },

    {
        type: "input",
        name: "internSchool",
        message: "What school does this intern attend?",
        default: "Porthaven School",
    }
];

module.exports { managerQuestions, engineerQuestions, internQuestions }