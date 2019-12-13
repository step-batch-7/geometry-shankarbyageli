const arePointsEqual = function(pointA, pointB) {
  return pointA.x === pointB.x && pointA.y === pointB.y;
};

class Line {
  constructor(start, end) {
    this.start = { x: start.x, y: start.y };
    this.end = { x: end.x, y: end.y };
  }

  toString() {
    return `Line (${this.start.x},${this.start.y}) (${this.end.x},${this.end.y})`;
  }

  get length() {
    const x = this.start.x - this.end.x;
    const y = this.start.y - this.end.y;
    const length = Math.sqrt(x ** 2 + y ** 2);
    return length;
  }

  isParallelTo(other) {
    if (this === other) return true;
    return other instanceof Line && this.slope === other.slope;
  }

  get slope() {
    const y = this.end.y - this.start.y;
    const x = this.end.x - this.start.x;
    return y / x;
  }

  isEqualTo(other) {
    if (this === other) return true;
    return (
      other instanceof Line &&
      arePointsEqual(this.start, other.start) &&
      arePointsEqual(this.end, other.end)
    );
  }
}

module.exports = Line;
