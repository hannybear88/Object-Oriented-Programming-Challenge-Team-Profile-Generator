const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("New Instance", () => {
        it("should have properties 'name', 'id' and 'email' with values set to the parameters passing to the constructor.", () => {
            // data setup

            const name = "Kakashi";
            const id = 915;
            const email = "kakashi@gmail.com";

            // create the case
            const kakashi = new Employee(name, id, email);

            // make assertion
            expect(kakashi.name).toEqual(name);
            expect(kakashi.id).toEqual(id);
            expect(kakashi.email).toEqual(email);
        });
    });
    describe("getName", () => {
        it("should return the value of the property 'name'", () => {

            // data setup
            const name = "Kakashi";
            const id = 915;
            const email = "kakashi@gmail.com";

            // create the case
            const kakashi = new Employee(name, id, email);
            const result = kakashi.getName();

            // make assertion
            expect(result).toEqual(kakashi.name);
        });
    });
    describe("getId", () => {
        it("should return the value of the property 'id'", () => {

            // data setup
            const name = "Kakashi";
            const id = 915;
            const email = "kakashi@gmail.com";

            // create the case
            const kakashi = new Employee(name, id, email);
            const result = kakashi.getId();

            // make assertion
            expect(result).toEqual(kakashi.id);
        });
    });
    describe("getEmail", () => {
        it("should return the value of the property 'email'", () => {

            // data setup
            const name = "Kakashi";
            const id = 915;
            const email = "kakashi@gmail.com";

            // create the case
            const kakashi = new Employee(name, id, email);
            const result = kakashi.getEmail();

            // make assertion
            expect(result).toEqual(kakashi.email);
        });
    });
    describe("getRole", () => {
        it("should return 'Employee'", () => {

            // data setup
            const name = "Kakashi";
            const id = 915;
            const email = "kakashi@gmail.com";

            // create the case
            const kakashi = new Employee(name, id, email);
            const result = kakashi.getRole();
            
            // make assertion
            expect(result).toEqual("Employee");
        });
    });
})