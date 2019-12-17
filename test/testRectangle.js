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
});
