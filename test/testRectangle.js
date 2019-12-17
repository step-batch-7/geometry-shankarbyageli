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
      const rectangle = new Rectangle({ x: -3, y: -5 }, { x: 2, y: 3 });
      const actual = rectangle.area;
      assert.strictEqual(actual, 40);
    });
  });

  describe("#perimeter", function() {
    it("should give perimeter of rectangle", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 3 });
      const actual = rectangle.perimeter;
      assert.strictEqual(actual, 6);
    });
  });
});
