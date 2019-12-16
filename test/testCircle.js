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
});
