const arePointsEqual = function(pointA, pointB) {
  return pointA.x === pointB.x && pointA.y === pointB.y;
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

  findX(b) {
    let [startY, endY] = [this.start.y, this.end.y].sort();
    if (b >= startY && b <= endY) {
      const y = this.start.y - b;
      const x = this.start.x - y / this.slope;
      return x;
    }
    return NaN;
  }
}

module.exports = Line;
