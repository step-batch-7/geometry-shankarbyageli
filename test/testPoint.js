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

  describe("#isEqualTo", function() {
    it("should validate if given point has same coordinates and of Point instance", function() {
      const p1 = new Point(3, 5);
      const p2 = new Point(3, 5);
      const actual = p1.isEqualTo(p2);
      assert.isOk(actual);
    });

    it("should invalidate if given object has same coordinates but not of Point instance", function() {
      const p1 = new Point(3, 5);
      const p2 = { x: 3, y: 5 };
      const actual = p1.isEqualTo(p2);
      assert.isNotOk(actual);
    });

    it("should invalidate if given object has different coordinates", function() {
      const p1 = new Point(3, 5);
      const p2 = new Point(3, 6);
      const actual = p1.isEqualTo(p2);
      assert.isNotOk(actual);
    });
  });

  describe("#clone", function() {
    it("should give the copy of point", function() {
      const point = new Point(4, 5);
      const actual = point.clone();
      assert.deepStrictEqual(point, actual);
      assert.isOk(actual instanceof Point);
    });
  });
});
