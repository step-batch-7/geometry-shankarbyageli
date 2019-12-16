const { Point } = require("./point");

class Circle {
  constructor(center, radius) {
    this.center = new Point(center.x, center.y);
    this.radius = radius;
  }

  toString() {
    return `[Circle @(${this.center.x},${this.center.y}) radius ${this.radius}]`;
  }

  isEqualTo(other) {
    if (!(other instanceof Circle)) return false;
    return (
      this === other ||
      (this.center.isEqualTo(other.center) && this.radius === other.radius)
    );
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

module.exports = { Circle };
