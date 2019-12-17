const assert = require("chai").assert;
const Point = require("../src/point");
const Line = require("../src/line");
const Circle = require("../src/circle");

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

  describe("#findDistanceTo", function() {
    it("should give distance of point from origin point", function() {
      const pointA = new Point(3, 4);
      const pointB = new Point(0, 0);
      const actual = pointA.findDistanceTo(pointB);
      assert.strictEqual(actual, 5);
    });

    it("should give distance as 0 if same point is given", function() {
      const pointA = new Point(3, 4);
      const actual = pointA.findDistanceTo(pointA);
      assert.strictEqual(actual, 0);
    });

    it("should give NaN if non-point object with same coordinates is given", function() {
      const pointA = new Point(3, 4);
      const pointB = { x: 3, y: 4 };
      const actual = pointA.findDistanceTo(pointB);
      assert.isNaN(actual);
    });

    it("should give distance of point with negative coordinates", function() {
      const pointA = new Point(3, 4);
      const pointB = new Point(-1, -4);
      const actual = pointA.findDistanceTo(pointB);
      assert.approximately(actual, 8.94, 0.05);
    });
  });

  describe("#isOn", function() {
    it("should validate if point is on given line", function() {
      const point = new Point(1, 1);
      const line = new Line({ x: 0, y: 1 }, { x: 6, y: 1 });
      const actual = point.isOn(line);
      assert.isOk(actual);
    });

    it("should invalidate if point is not on line", function() {
      const point = new Point(1, 1);
      const line = new Line({ x: 3, y: 2 }, { x: 6, y: 6 });
      const actual = point.isOn(line);
      assert.isNotOk(actual);
    });

    it("should validate if point is on the given circle", function() {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const point = new Point(5, 0);
      const actual = point.isOn(circle);
      assert.isOk(actual);
    });

    it("should validate if point is not on the given circle", function() {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const point = new Point(5, 3);
      const actual = point.isOn(circle);
      assert.isNotOk(actual);
    });
  });
});
