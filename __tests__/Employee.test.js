const Employee = require("../lib/Employee");

describe("Employee", () => {
    it('should have a name', () => {
        const employee = new Employee('Guy', 1, 'fun@guy.com');
        expect(employee.id).toEqual(1);
    });
    it('should have an id', () => { })
    it('should have an email', () => { })
});
