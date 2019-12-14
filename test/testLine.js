const Line = require("../src/line");
const assert = require("chai").assert;

describe("Line", function() {
  describe("#toString", function() {
    it("should give the string representation of line object", function() {
      const line = new Line({ x: 3, y: 4 }, { x: 6, y: 7 });
      const actual = line.toString();
      const expected = "[Line (3,4) to (6,7)]";
      assert.strictEqual(actual, expected);
    });
  });

  describe("#isEqualTo", function() {
    it("should check whether two lines are equal", function() {
      const line = new Line({ x: 3, y: 4 }, { x: 6, y: 7 });
      const actual = line.isEqualTo(new Line({ x: 3, y: 4 }, { x: 6, y: 7 }));
      assert.isOk(actual);
    });

    it("should determine if two lines are not equal", function() {
      const line = new Line({ x: 3, y: 3 }, { x: 6, y: 7 });
      const actual = line.isEqualTo(new Line({ x: 2, y: 3 }, { x: 6, y: 3 }));
      assert.isNotOk(actual);
    });

    it("should validate if same line is given", function() {
      const line = new Line({ x: 3, y: 3 }, { x: 6, y: 7 });
      const actual = line.isEqualTo(line);
      assert.isOk(actual);
    });

    it("should invalidate if other given line is not a Line object", function() {
      const line = new Line({ x: 3, y: 3 }, { x: 6, y: 7 });
      const otherLine = {
        start: { x: 3, y: 3 },
        end: { x: 6, y: 7 }
      };
      const actual = line.isEqualTo(otherLine);
      assert.isNotOk(actual);
    });
  });

  describe("#length", function() {
    it("should give length of the line with positive coordinates", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 5, y: 1 });
      const actual = line.length;
      assert.strictEqual(actual, 4);
    });

    it("should give length of the line with negative coordinates", function() {
      const line = new Line({ x: -3, y: -3 }, { x: 0, y: -3 });
      const actual = line.length;
      assert.strictEqual(actual, 3);
    });

    it("should give length zero for line with same end points", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 1, y: 2 });
      const actual = line.length;
      assert.strictEqual(actual, 0);
    });

    it("should give length of line with decimal point coordinates", function() {
      const line = new Line({ x: 5, y: 4 }, { x: 2, y: 3 });
      const actual = line.length;
      assert.approximately(actual, 3.16, 0.05);
    });
  });

  describe("#isParallelTo", function() {
    it("should validate if two lines are parallel", function() {
      const line = new Line({ x: 1, y: 3 }, { x: 4, y: 3 });
      const other = new Line({ x: 3, y: 6 }, { x: 0, y: 6 });
      const actual = line.isParallelTo(other);
      assert.isOk(actual);
    });

    it("should invalidate if two lines are not parallel", function() {
      const line = new Line({ x: 1, y: 3 }, { x: 4, y: 3 });
      const other = new Line({ x: 3, y: 0 }, { x: 5, y: 6 });
      const actual = line.isParallelTo(other);
      assert.isNotOk(actual);
    });

    it("should invalidate if both lines are same", function() {
      const line = new Line({ x: 1, y: 3 }, { x: 4, y: 3 });
      const actual = line.isParallelTo(line);
      assert.isNotOk(actual);
    });

    it("should invalidate if both lines have same coordinates", function() {
      const line = new Line({ x: 1, y: 3 }, { x: 4, y: 3 });
      const other = new Line({ x: 1, y: 3 }, { x: 4, y: 3 });
      const actual = line.isParallelTo(other);
      assert.isNotOk(actual);
    });
  });

  describe("#slope", function() {
    it("should give slope of line with positive coordinates", function() {
      const line = new Line({ x: 1, y: 4 }, { x: 3, y: 1 });
      const actual = line.slope;
      assert.strictEqual(actual, -1.5);
    });

    it("should give slope of line with negative coordinates", function() {
      const line = new Line({ x: -2, y: 3 }, { x: 0, y: -1 });
      const actual = line.slope;
      assert.strictEqual(actual, -2);
    });

    it("should give slope of vertical line as Infinfity", function() {
      const line = new Line({ x: 3, y: 2 }, { x: 3, y: 5 });
      const actual = line.slope;
      assert.strictEqual(actual, Infinity);
    });

    it("should give slope of horizonal line as 0", function() {
      const line = new Line({ x: 2, y: 2 }, { x: 5, y: 2 });
      const actual = line.slope;
      assert.strictEqual(actual, 0);
    });
  });

  describe("#findX", function() {
    it("should give X coordinate of given Y of horizontal line", function() {
      const line = new Line({ x: 2, y: 2 }, { x: 7, y: 2 });
      const actual = line.findX(5);
      assert.isNaN(actual);
    });

    it("should give NaN for given Y which is not on line", function() {
      const line = new Line({ x: 4, y: 6 }, { x: 4, y: 2 });
      const actual = line.findX(10);
      assert.isNaN(actual);
    });

    it("should give X coordinate of given Y of vertical line", function() {
      const line = new Line({ x: 3, y: 1 }, { x: 3, y: 8 });
      const actual = line.findX(6);
      assert.strictEqual(actual, 3);
    });
  });

  describe("#findY", function() {
    it("should give X coordinate of given Y of horizontal line", function() {
      const line = new Line({ x: 4, y: 6 }, { x: 4, y: 2 });
      const actual = line.findY(4);
      assert.strictEqual(actual, 6);
    });

    it("should give NaN for given Y which is not on line", function() {
      const line = new Line({ x: 1, y: 6 }, { x: 4, y: 2 });
      const actual = line.findY(10);
      assert.isNaN(actual);
    });

    it("should give X coordinate of given Y of vertical line", function() {
      const line = new Line({ x: 3, y: 1 }, { x: 3, y: 8 });
      const actual = line.findY(1);
      assert.isNaN(actual);
    });
  });
});
