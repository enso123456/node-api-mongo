const expect = require("chai").expect;
const tigerApi = require("../router/tiger");

describe("tiger", function() {
  let object;
  beforeEach(function() {
    object = { id: 3, name: "Tom", age: 14, gender: "male" };
  });

  it("return a list of tigers", function() {
    expect(tigerApi.getAll()).to.be.a("array");
  });

  it("create a tiger", function() {
    expect(tigerApi.create(object)).to.equal(object);
  });

  it("returns a tiger from index", function() {
    expect(tigerApi.getTiger(3)).to.deep.equal(object);
  });

  it("returns an empty object if not found", function() {
    expect(tigerApi.getTiger(4)).to.deep.equal({});
  });

  it("remove a tiger from the list", function() {
    tigerApi.create({ id: 3, name: "Tom5", age: 14, gender: "male" });
    tigerApi.create({ id: 4, name: "Tom6", age: 14, gender: "male" });

    expect(tigerApi.removeTiger(3)).to.have.length(3);
  });
});
