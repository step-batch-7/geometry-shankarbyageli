const assert = require("chai").assert;
const Point = require("../src/point");

describe("Point", function() {
  describe("#toString", function() {
    it("should give the string representation of the Point", function() {
      const point = new Point(3, 2);
      const actual = point.toString();
      assert.strictEqual(actual, "[Point @(3,2)]");
    });
  });
});
