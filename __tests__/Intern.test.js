const Intern = require("../lib/Intern");

describe("Intern", () => {

    it('should have a School', () => {
        const intern = new Intern('Guy', 1, 'fun@guy.com', 'UNC');
        expect(intern.getSchool()).toEqual('UNC');
    });
    it('should have a role of Intern', () => {
        const intern = new Intern('Guy', 1, 'fun@guy.com', 'UNC');
        expect(intern.getJob()).toEqual('Intern');
    });
});
