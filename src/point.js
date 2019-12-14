class Point {
  constructor(x, y) {
    (this.x = x), (this.y = y);
  }

  toString() {
    return `[Point @(${this.x},${this.y})]`;
  }

  visit(functionRef) {
    return functionRef(this.x, this.y);
  }

  isEqualTo(other) {
    return other instanceof Point && this.x === other.x && this.y === other.y;
  }
}

module.exports = Point;
