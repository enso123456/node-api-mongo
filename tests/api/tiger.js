const expect = require("chai").expect;
const request = require("supertest");
const rewire = require("rewire");

const app = rewire("../../server/server");

describe("Tiger Api", function() {
  it("should get all tigers", function(done) {
    request(app)
      .get("/tigers")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function(err, resp) {
        expect(resp.body).to.be.an("array");
        done();
      });
  });

  it("should create a tiger", function(done) {
    request(app)
      .post("/tigers", {
        id: 3,
        name: "Tom",
        age: 14,
        gender: "male"
      })
      .expect(200)
      .end(done);
  });
});
