// create the team
const generateTeamMembers = (team) => {

    // generate manager card
    const generateManager = (manager) => {
        return
        `
    <div class="card employee-card">
    <div class="card-header">
        <h2>${manager.getName()}</h2>
        <h3>${manager.getRole()}</h3>
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
    return `
    `;

    // generate intern card
    `
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
    <title>ENTER PAGE TITLE HERE</title>
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
        <h1>My Team</h1>
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
