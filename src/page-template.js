// create the team
const generateTeamMembers = (team) => {

    // generate manager card
    const generateManager = (manager) => {
        return
        `
    <div class="card employee-card">
    <div class="card-header">
        <h2>${manager.getName()}</h2>
        <h3>${manager.getJob()}</h3>
    </div>
    <div class="card-body">
        <ul class="card-id-list">
            <li class="id-number">ID: ${manager.getId()}</li>
            <li class="id-email">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="id-office">Office number: ${manager.getOfficeNumber()}</li>
        </ul>
    </div>
</div>
    `;
    };

    // generate engineer card
    const generateEngineer = engineer => {
        return `
<div class="card employee-card">
    <div class="card-header">
        <h2>${engineer.getName()}</h2>
        <h3>${engineer.getJob()}</h3>
    </div>
    <div class="card-body">
        <ul class="card-id-list">
            <li class="id-number">ID: ${engineer.getId()}</li>
            <li class="id-email">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="id-github">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>
        `;
    };

    // generate intern card
    const generateIntern = intern => {
        return `
<div class="card employee-card">
    <div class="card-header">
        <h2>${intern.getName()}</h2>
        <h3>${intern.getJob()}</h3>
    </div>
    <div class="card-body">
        <ul class="card-id-list">
            <li class="id-number">ID: ${intern.getId()}</li>
            <li class="id-email">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="id-school">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
        `;
    };

    // export function to generate entire page
    module.exports = (team) => {
        // TODO: MAIN HTML TEMPLATE LITERAL GOES HERE
        return `
    <!-- Instructor provided template -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Team</title>
    <!-- Minified version -->
    <style>
        @import "https://cdn.simplecss.org/simple.min.css";

        main {
            display: grid;
            grid-column: 1/-1;
            justify-items: center;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 1rem;
            max-width: 1140px;
            margin: auto;
        }

        @media screen and (max-width: 1140px) {
            main {
                grid-template-columns: 1fr 1fr;
            }
        }

        @media screen and (max-width: 720px) {
            main {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>

<body>
    <header>
        <h1>The Team</h1>
    </header>
    <main>
    ${generateTeam(team)}
    </main>
    <footer>
        &copy; 2022-2023
    </footer>
</body>

</html>
    `;
    };
};