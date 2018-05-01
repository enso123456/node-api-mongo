const expect = require("chai").expect;
const tigerController = require("../../controllers/tiger");

describe("Tiger Controller", function() {
  let tiger;

  beforeEach(function() {
    tiger = { id: 3, name: "Tom", age: 14, gender: "male" };
  });

  it("to be an array", function() {
    expect(tigerController.getAll()).to.be.a("array");
  });

  it("create a tiger", function() {
    expect(tigerController.create(tiger)).to.equal(tiger);
  });

  it("returns a tiger from index", function() {
    expect(tigerController.getTiger(3)).to.deep.equal(tiger);
  });

  it("returns an empty object if not found", function() {
    expect(tigerController.getTiger(4)).to.deep.equal({});
  });

  it("remove a tiger from the list", function() {
    tigerController.create({ id: 3, name: "Tom5", age: 14, gender: "male" });
    tigerController.create({ id: 4, name: "Tom6", age: 14, gender: "male" });
    expect(tigerController.removeTiger(3)).to.have.length(3);
  });
});
