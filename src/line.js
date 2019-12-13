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

  getLength() {
    const x = Math.abs(this.start.x - this.end.x);
    const y = Math.abs(this.start.y - this.end.y);
    const length = Math.sqrt(x ** 2 + y ** 2);
    return length;
  }

  get length() {
    return this.getLength();
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
