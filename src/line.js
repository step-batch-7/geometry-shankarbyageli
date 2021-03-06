const Point = require("./point");

const isNumberInRange = function(range, number) {
  [min, max] = range.sort((a, b) => a - b);
  return number >= min && number <= max;
};

const arePointsCollinear = function(pointA, pointB, pointC) {
  return (
    (pointB.y - pointA.y) * (pointC.x - pointB.x) ===
    (pointC.y - pointB.y) * (pointB.x - pointA.x)
  );
};

class Line {
  constructor(start, end) {
    this.start = new Point(start.x, start.y);
    this.end = new Point(end.x, end.y);
    Object.defineProperties(this, {
      start: { writable: false },
      end: { writable: false }
    });
  }

  toString() {
    return `[Line (${this.start.x},${this.start.y}) to (${this.end.x},${this.end.y})]`;
  }

  get length() {
    return this.start.findDistanceTo(this.end);
  }

  isParallelTo(other) {
    if (
      !(other instanceof Line) ||
      this === other ||
      arePointsCollinear(this.start, this.end, other.start)
    )
      return false;
    return this.slope === other.slope;
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
      this.start.isEqualTo(other.start) &&
      this.end.isEqualTo(other.end)
    );
  }

  findX(y) {
    if (!isNumberInRange([this.start.y, this.end.y], y)) return NaN;
    if (this.start.y === this.end.y) return this.start.x;
    const dy = this.start.y - y;
    return this.start.x - dy / this.slope;
  }

  findY(x) {
    if (!isNumberInRange([this.start.x, this.end.x], x)) return NaN;
    if (this.start.x === this.end.x) return this.start.y;
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

  hasPoint(point) {
    return (
      point instanceof Point &&
      (point.x === this.findX(point.y) || point.y === this.findY(point.x))
    );
  }

  findPointFromStart(distance) {
    if (distance > this.length || distance < 0 || !Number.isInteger(distance))
      return null;
    const ratio = distance / this.length;
    const x = (1 - ratio) * this.start.x + ratio * this.end.x;
    const y = (1 - ratio) * this.start.y + ratio * this.end.y;
    return new Point(x, y);
  }

  findPointFromEnd(distance) {
    return new Line(this.end, this.start).findPointFromStart(distance);
  }
}

module.exports = Line;
