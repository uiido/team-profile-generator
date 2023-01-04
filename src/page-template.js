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
    `};

    // generate engineer card
    return `
    `

        // generate intern card
        `
    `
};

// export function to generate entire page
module.exports = (team) => {
    // TODO: MAIN HTML TEMPLATE LITERAL GOES HERE
};
