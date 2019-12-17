const assert = require("chai").assert;
const Circle = require("../src/circle");
const Point = require("../src/point");

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

  describe("#isEqualTo", function() {
    it("should validate if given circle is of same center and radius", function() {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      const other = new Circle({ x: 1, y: 2 }, 5);
      const actual = circle.isEqualTo(other);
      assert.isOk(actual);
    });

    it("should validate if given circle is same", function() {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      const actual = circle.isEqualTo(circle);
      assert.isOk(actual);
    });

    it("should invalidate if center is same but radius is different", function() {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      const other = new Circle({ x: 1, y: 2 }, 3);
      const actual = circle.isEqualTo(other);
      assert.isNotOk(actual);
    });

    it("should invalidate if radius is same but center is different", function() {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      const other = new Circle({ x: 3, y: 2 }, 5);
      const actual = circle.isEqualTo(other);
      assert.isNotOk(actual);
    });

    it("should invalidate if radius and center is same but not Circle object", function() {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      const other = { center: { x: 3, y: 2 }, radius: 5 };
      const actual = circle.isEqualTo(other);
      assert.isNotOk(actual);
    });
  });

  describe("#area", function() {
    it("should give area of circle", function() {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const actual = circle.area;
      assert.approximately(actual, 78.5, 0.05);
    });
  });

  describe("#perimeter", function() {
    it("should give perimeter of the circle", function() {
      const circle = new Circle({ x: 0, y: 0 }, 7);
      const actual = circle.perimeter;
      assert.approximately(actual, 44, 0.05);
    });
  });

  describe("#hasPoint", function() {
    it("should validate if given point is on the circumference of the circle", function() {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const point = new Point(0, 5);
      const actual = circle.hasPoint(point);
      assert.isOk(actual);
    });

    it("should invalidate if given point is inside the circumference", function() {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const point = new Point(0, 3);
      const actual = circle.hasPoint(point);
      assert.isNotOk(actual);
    });

    it("should invalidate if given point is outside the circumference", function() {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const point = new Point(0, 6);
      const actual = circle.hasPoint(point);
      assert.isNotOk(actual);
    });
  });

  describe("#moveTo", function() {
    it("should move circle to center given origin", function() {
      const circle = new Circle({ x: 5, y: 2 }, 6);
      const point = { x: 0, y: 0 };
      const actual = circle.moveTo(point);
      assert.isOk(actual.isEqualTo(new Circle({ x: 0, y: 0 }, 6)));
    });

    it("should give same circle if given point is same as circle's center", function() {
      const circle = new Circle({ x: 5, y: 2 }, 6);
      const point = { x: 5, y: 2 };
      const actual = circle.moveTo(point);
      assert.isOk(actual.isEqualTo(new Circle({ x: 5, y: 2 }, 6)));
    });
  });

  describe("#covers", function() {
    it("should validate if given point lies inside the circle", function() {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const point = new Point(0, 4);
      const actual = circle.covers(point);
      assert.isOk(actual);
    });

    it("should validate if given point lies on the circumference of circle", function() {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const point = new Point(5, 0);
      const actual = circle.covers(point);
      assert.isNotOk(actual);
    });

    it("should validate if given point lies on the center of the circle", function() {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const point = new Point(0, 0);
      const actual = circle.covers(point);
      assert.isOk(actual);
    });

    it("should invalidate if given point lies outside the circle", function() {
      const circle = new Circle({ x: -4, y: 2 }, 5);
      const point = new Point(-4, 8);
      const actual = circle.covers(point);
      assert.isNotOk(actual);
    });

    it("should invalidate if given point is not an instance of Point", function() {
      const circle = new Circle({ x: -4, y: 2 }, 5);
      const point = { x: -4, y: 4 };
      const actual = circle.covers(point);
      assert.isNotOk(actual);
    });
  });
});
