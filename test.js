"use strict";

var chai = require("chai"),
  expect = chai.expect;

chai.should();

function testMocha(num) {
  return num % 2 === 0;
}

describe("testMocha", function() {
  it("should return 1", function() {
    testMocha(4).should.be.true;
  });
});
