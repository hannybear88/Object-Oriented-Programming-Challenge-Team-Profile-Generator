const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("New Instance", () => {
        it("should have properties 'name', 'id', 'email' and 'github' with values set to the parameters passing to the constructor.", () => {
            
            // data setup
            const name = "Asuma";
            const id = 10;
            const email = "asuma@gmail.com";
            const github = "asuma1018";
            
            // create the case
            const asuma = new Engineer(name, id, email, github);
            
            // make assertion
            expect(asuma.name).toEqual(name);
            expect(asuma.id).toEqual(id);
            expect(asuma.email).toEqual(email);
            expect(asuma.github).toEqual(github);
        });
    });
    describe("getName", () => {
        it("should return the value of the property 'name'", () => {
           
            // data setup
            const name = "Asuma";
            const id = 10;
            const email = "asuma@gmail.com";
            const github = "asuma1018";
            
            // create the case
            const asuma = new Engineer(name, id, email, github);
            const result = asuma.getName();
            
            // make assertion
            expect(result).toEqual(asuma.name);
        });
    });
    describe("getId", () => {
        it("should return the value of the property 'id'", () => {
            
            // data setup
            const name = "Asuma";
            const id = 10;
            const email = "asuma@gmail.com";
            const github = "asuma1018";
            
            // create the case
            const asuma = new Engineer(name, id, email, github);
            const result = asuma.getId();
            
            // make assertion
            expect(result).toEqual(asuma.id);
        });
    });
    describe("getEmail", () => {
        it("should return the value of the property 'email'", () => {
            
            // data setup
            const name = "Asuma";
            const id = 10;
            const email = "asuma@gmail.com";
            const github = "asuma1018";
            
            // create the case
            const asuma = new Engineer(name, id, email, github);
            const result = asuma.getEmail();
            
            // make assertion
            expect(result).toEqual(asuma.email);
        });
    });
    describe("getGithub", () => {
        it("should return the value of the property 'github'", () => {
            
            // data setup
            const name = "Asuma";
            const id = 10;
            const email = "asuma@gmail.com";
            const github = "asuma1018";
            
            // create the case
            const asuma = new Engineer(name, id, email, github);
            const result = asuma.getGithub();
            
            // make assertion
            expect(result).toEqual(asuma.github);
        });
    });
    describe("getRole", () => {
        it("should return 'Engineer'", () => {
            
            // data setup
            const name = "Asuma";
            const id = 10;
            const email = "asuma@gmail.com";
            const github = "asuma1018";
            
            // create the case
            const asuma = new Engineer(name, id, email, github);
            const result = asuma.getRole();
            
            // make assertion
            expect(result).toEqual("Engineer");
        });
    });
})