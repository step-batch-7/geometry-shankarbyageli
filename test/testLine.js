const Line = require("../src/line");
const assert = require("assert");

describe("toString", function() {
  it("should give the string representation of line object", function() {
    const line = new Line({ x: 3, y: 4 }, { x: 6, y: 7 });
    const actual = line.toString();
    const expected = "Line (3,4) (6,7)";
    assert.strictEqual(actual, expected);
  });
});

describe("isEqualTo", function() {
  it("should check whether two lines are equal", function() {
    const line = new Line({ x: 3, y: 4 }, { x: 6, y: 7 });
    const actual = line.isEqualTo(new Line({ x: 3, y: 4 }, { x: 6, y: 7 }));
    assert.strictEqual(actual, true);
  });

  it("should determine if two lines are not equal", function() {
    const line = new Line({ x: 3, y: 3 }, { x: 6, y: 7 });
    const actual = line.isEqualTo(new Line({ x: 2, y: 3 }, { x: 6, y: 3 }));
    assert.strictEqual(actual, false);
  });
});
