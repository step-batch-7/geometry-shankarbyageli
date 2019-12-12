const Line = require("../src/line");
const assert = require("assert");

describe("toString", function() {
  it("should give the string representation of line object", function() {
    const line = new Line(3, 4, 6, 7);
    const actual = line.toString();
    const expected = "Line (3,4)(6,7)";
    assert.strictEqual(actual, expected);
  });
});

describe("isEqualTo", function() {
  it("should check whether two lines are equal", function() {
    const line = new Line(1, 1, 2, 2);
    const actual = line.isEqualTo(new Line(1, 1, 2, 2));
    assert.strictEqual(actual, true);
  });

  it("should determina if two lines are not equal", function() {
    const line = new Line(1, 1, 3, 2);
    const actual = line.isEqualTo(new Line(1, 1, 2, 2));
    assert.strictEqual(actual, false);
  });
});
