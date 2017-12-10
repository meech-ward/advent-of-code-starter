const chai = require('chai');
const expect = chai.expect;

let index = require('./index.js');

describe("tests", function() {

  function expectOutcome(input, expected) {
    expect(index(input)).to.equal(expected);
  }

  it("should work", function() {
    expectOutcome(1, 1);
  });

})