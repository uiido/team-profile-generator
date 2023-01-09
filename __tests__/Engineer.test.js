const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it('should have a Github', () => {
        const engineer = new Engineer('Guy', 1, 'fun@guy.com', 'funguy');
        expect(engineer.getGithub()).toEqual('funguy');
    });
    it('should have a role of Engineer', () => {
        const engineer = new Engineer('Guy', 1, 'fun@guy.com', 'funguy');
        expect(engineer.getJob()).toEqual('Engineer');
    });
});
