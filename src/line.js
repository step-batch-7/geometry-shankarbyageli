const Point = require("./point");

const arePointsEqual = function(pointA, pointB) {
  return pointA.x === pointB.x && pointA.y === pointB.y;
};

const isNumberInRange = function(range, number) {
  [min, max] = range.sort();
  return number >= min && number <= max;
};

class Line {
  constructor(start, end) {
    this.start = { x: start.x, y: start.y };
    this.end = { x: end.x, y: end.y };
  }

  toString() {
    return `[Line (${this.start.x},${this.start.y}) to (${this.end.x},${this.end.y})]`;
  }

  get length() {
    const x = this.start.x - this.end.x;
    const y = this.start.y - this.end.y;
    return Math.sqrt(x ** 2 + y ** 2);
  }

  isParallelTo(other) {
    if (this === other || this.isEqualTo(other)) return false;
    return other instanceof Line && this.slope === other.slope;
  }

  get slope() {
    const dy = this.end.y - this.start.y;
    const dx = this.end.x - this.start.x;
    return dy / dx;
  }

  isEqualTo(other) {
    if (this === other) return true;
    return (
      other instanceof Line &&
      arePointsEqual(this.start, other.start) &&
      arePointsEqual(this.end, other.end)
    );
  }

  findX(y) {
    let [startY, endY] = [this.start.y, this.end.y].sort();
    if (y < startY || y > endY) {
      return NaN;
    }
    if (startY === endY) return this.start.x;
    const dy = this.start.y - y;
    return this.start.x - dy / this.slope;
  }

  findY(x) {
    let [startX, endX] = [this.start.x, this.end.x].sort();
    if (x < startX || x > endX) {
      return NaN;
    }
    if (startX === endX) return this.start.y;
    const dx = this.start.x - x;
    return this.start.y - this.slope * dx;
  }

  split() {
    const midPoint = {
      x: (this.start.x + this.end.x) / 2,
      y: (this.start.y + this.end.y) / 2
    };
    return [new Line(this.start, midPoint), new Line(midPoint, this.end)];
  }

  hasPoint(object) {
    if (!object instanceof Point) return false;
    const isPointCoordsInRange =
      isNumberInRange([this.start.x, this.end.x], object.x) &&
      isNumberInRange([this.start.y, this.end.y], object.y);
    const slope = this.slope;
    const yIntercept = this.start.y - slope * this.start.x;
    return isPointCoordsInRange && object.y === slope * object.x + yIntercept;
  }
}

module.exports = Line;
