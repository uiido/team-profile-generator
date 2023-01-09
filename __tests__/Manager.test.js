const Manager = require("../lib/Manager");
const Manager = require("../lib/Manager");

describe("Manager", () => {

    it('should have an officeNumber', () => {
        const manager = new Manager('Guy', 1, 'fun@guy.com', 123);
        expect(manager.getOfficeNumber()).toEqual('1');
    });
    it('should have a role of Manager', () => {
        const manager = new Manager('Guy', 1, 'fun@guy.com', 123);
        expect(manager.getJob()).toEqual('Manager');
    });
});
