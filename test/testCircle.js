const assert = require("chai").assert;
const { Circle } = require("../src/circle");

describe("Circle", function() {
  describe("#toString", function() {
    it("should give string representation of circle object", function() {
      const center = { x: 1, y: 2 };
      const circle = new Circle(center, 5);
      const actual = circle.toString();
      const expected = "[Circle @(1,2) radius 5]";
      assert.strictEqual(actual, expected);
    });
  });
});
