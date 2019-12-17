const Point = require("./point");

class Rectangle {
  constructor(topLeft, bottomRight) {
    this.topLeft = new Point(topLeft.x, topLeft.y);
    this.bottomRight = new Point(bottomRight.x, bottomRight.y);
  }

  toString() {
    const topLeft = `${this.topLeft.x},${this.topLeft.y}`;
    const bottomRight = `${this.bottomRight.x},${this.bottomRight.y}`;
    return `[Rectangle (${topLeft}) to (${bottomRight})]`;
  }

  get area() {
    const length = this.topLeft.x - this.bottomRight.x;
    const width = this.topLeft.y - this.bottomRight.y;
    return Math.abs(length * width);
  }

  get perimeter() {
    const length = this.topLeft.x - this.bottomRight.x;
    const width = this.topLeft.y - this.bottomRight.y;
    return 2 * (Math.abs(length) + Math.abs(width));
  }

  isEqualTo(other) {
    if (!(other instanceof Rectangle)) return false;
    return (
      this.topLeft.isEqualTo(other.topLeft) &&
      this.bottomRight.isEqualTo(other.bottomRight)
    );
  }
}

module.exports = Rectangle;
