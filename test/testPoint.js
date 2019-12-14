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

  describe("#visit", function() {
    it("should return addition of coordinates for add function", function() {
      const p = new Point(3, 4);
      const add = function(x, y) {
        return x + y;
      };
      const actual = p.visit(add);
      assert.strictEqual(actual, 7);
    });

    it("should return multiplication of coordinates for multiply function", function() {
      const p = new Point(4, 5);
      const multiply = function(x, y) {
        return x * y;
      };
      const actual = p.visit(multiply);
      assert.strictEqual(actual, 20);
    });
  });
});
