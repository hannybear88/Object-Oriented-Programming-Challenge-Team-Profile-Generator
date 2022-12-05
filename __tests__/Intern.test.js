const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("New Instance", () => {
        it("should have properties 'name', 'id', 'email' and 'school' with values set to the parameters passing to the constructor.", () => {
            // data setup
            const name = "Shikamaru";
            const id = 922;
            const email = "shikamaru@gmail.com";
            const school = "UCSD";
            // create the case
            const shikamaru = new Intern(name, id, email, school);
            // make assertion
            expect(shikamaru.name).toEqual(name);
            expect(shikamaru.id).toEqual(id);
            expect(shikamaru.email).toEqual(email);
            expect(shikamaru.school).toEqual(school);
        });
    });
    describe("getName", () => {
        it("should return the value of the property 'name'", () => {
            // data setup
            const name = "Shikamaru";
            const id = 922;
            const email = "shikamaru@gmail.com";
            const school = "UCSD";
            // create the case
            const shikamaru = new Intern(name, id, email, school);
            const result = shikamaru.getName();
            // make assertion
            expect(result).toEqual(shikamaru.name);
        });
    });
    describe("getId", () => {
        it("should return the value of the property 'id'", () => {
            // data setup
            const name = "Shikamaru";
            const id = 922;
            const email = "shikamaru@gmail.com";
            const school = "UCSD";
            // create the case
            const shikamaru = new Intern(name, id, email, school);
            const result = shikamaru.getId();
            // make assertion
            expect(result).toEqual(shikamaru.id);
        });
    });
    describe("getEmail", () => {
        it("should return the value of the property 'email'", () => {
            // data setup
            const name = "Shikamaru";
            const id = 922;
            const email = "shikamaru@gmail.com";
            const school = "UCSD";
            
            // create the case
            const shikamaru = new Intern(name, id, email, school);
            const result = shikamaru.getEmail();
            
            // make assertion
            expect(result).toEqual(shikamaru.email);
        });
    });
    describe("getSchool", () => {
        it("should return the value of the property 'school'", () => {
            
            // data setup
            const name = "Shikamaru";
            const id = 922;
            const email = "shikamaru@gmail.com";
            const school = "UCSD";
            
            // create the case
            const shikamaru = new Intern(name, id, email, school);
            const result = shikamaru.getSchool();
            
            // make assertion
            expect(result).toEqual(shikamaru.school);
        });
    });
    describe("getRole", () => {
        it("should return 'Intern'", () => {
            
            // data setup
            const name = "Shikamaru";
            const id = 922;
            const email = "shikamaru@gmail.com";
            const school = "UCSD";
            
            // create the case
            const shikamaru = new Intern(name, id, email, school);
            const result = shikamaru.getRole();
            
            // make assertion
            expect(result).toEqual("Intern");
        });
    });
})