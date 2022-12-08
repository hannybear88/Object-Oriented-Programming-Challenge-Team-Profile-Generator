const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("New Instance", () => {
    it("should have properties 'name', 'id', 'email' and 'officeNumber' with values set to the parameters passing to the constructor.", () => {
      // data setup
      const name = "Jiriaya";
      const id = 33;
      const email = "jiraiya@gmail.com";
      const officeNumber = 3994;

      // create the case
      const jiraiya = new Manager(name, id, email, officeNumber);

      // make assertion
      expect(jiraiya.name).toEqual(name);
      expect(jiraiya.id).toEqual(id);
      expect(jiraiya.email).toEqual(email);
      expect(jiraiya.officeNumber).toEqual(officeNumber);
    });
  });
  describe("getName", () => {
    it("should return the value of the property 'name'", () => {
      // data setup
      const name = "Jiriaya";
      const id = 33;
      const email = "jiraiya@gmail.com";
      const officeNumber = 3994;

      // create the case
      const jiraiya = new Manager(name, id, email, officeNumber);
      const result = jiraiya.getName();

      // make assertion
      expect(result).toEqual(jiraiya.name);
    });
  });
  describe("getId", () => {
    it("should return the value of the property 'id'", () => {
      // data setup
      const name = "Jiriaya";
      const id = 33;
      const email = "jiraiya@gmail.com";
      const officeNumber = 3994;

      // create the case
      const jiraiya = new Manager(name, id, email, officeNumber);
      const result = jiraiya.getId();

      // make assertion
      expect(result).toEqual(jiraiya.id);
    });
  });
  describe("getEmail", () => {
    it("should return the value of the property 'email'", () => {
      // data setup
      const name = "Jiriaya";
      const id = 33;
      const email = "jiraiya@gmail.com";
      const officeNumber = 3994;

      // create the case
      const jiraiya = new Manager(name, id, email, officeNumber);
      const result = jiraiya.getEmail();

      // make assertion
      expect(result).toEqual(jiraiya.email);
    });
  });
  describe("getRole", () => {
    it("should return 'Manager'", () => {
      // data setup
      const name = "Jiriaya";
      const id = 33;
      const email = "jiraiya@gmail.com";
      const officeNumber = 3994;

      // create the case
      const jiraiya = new Manager(name, id, email, officeNumber);
      const result = jiraiya.getRole();

      // make assertion
      expect(result).toEqual("Manager");
    });
  });
});
