const assert = require("chai").assert;
const Rectangle = require("../src/rectangle");

describe("Rectangle", function() {
  describe("#toString", function() {
    it("should give string representation of rectangle object", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 3 });
      const actual = rectangle.toString();
      assert.strictEqual(actual, "[Rectangle (1,1) to (2,3)]");
    });
  });

  describe("#area", function() {
    it("should give area of rectangle", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 3 });
      const actual = rectangle.area;
      assert.strictEqual(actual, 2);
    });

    it("should give area of rectangle with negative coordinates", function() {
      const rectangle = new Rectangle({ x: 2, y: 3 }, { x: -3, y: -5 });
      const actual = rectangle.area;
      assert.strictEqual(actual, 40);
    });

    it("should give area of rectangle as 0 with length 0", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 1, y: 6 });
      const actual = rectangle.area;
      assert.strictEqual(actual, 0);
    });

    it("should give area of rectangle as 0 with width 0", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 1 });
      const actual = rectangle.area;
      assert.strictEqual(actual, 0);
    });
  });

  describe("#perimeter", function() {
    it("should give perimeter of rectangle", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 3 });
      const actual = rectangle.perimeter;
      assert.strictEqual(actual, 6);
    });

    it("should give area of rectangle with negative coordinates", function() {
      const rectangle = new Rectangle({ x: 2, y: 3 }, { x: -3, y: -5 });
      const actual = rectangle.perimeter;
      assert.strictEqual(actual, 26);
    });
  });

  describe("#isEqualTo", function() {
    it("should validate if both rectangles have same diagonal coordinates", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 3 });
      const other = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 3 });
      assert.isOk(rectangle.isEqualTo(other));
    });

    it("should invalidate if given object is not a instance of Rectangle", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 3 });
      const other = { topLeft: { x: 1, y: 1 }, bottomRight: { x: 2, y: 3 } };
      assert.isNotOk(rectangle.isEqualTo(other));
    });

    it("should invalidate if given rectangle has diagonal coordinates reverse", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 3 });
      const other = new Rectangle({ x: 2, y: 3 }, { x: 1, y: 1 });
      assert.isNotOk(rectangle.isEqualTo(other));
    });
  });
});
