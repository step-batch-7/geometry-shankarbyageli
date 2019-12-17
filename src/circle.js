const Point = require("./point");

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

  get area() {
    return Math.PI * this.radius * this.radius;
  }

  get perimeter() {
    return 2 * Math.PI * this.radius;
  }

  hasPoint(point) {
    return (
      point instanceof Point &&
      this.center.findDistanceTo(point) === this.radius
    );
  }

  moveTo(point) {
    return new Circle({ x: point.x, y: point.y }, this.radius);
  }

  covers(point) {
    return (
      point instanceof Point && this.center.findDistanceTo(point) <= this.radius
    );
  }
}

module.exports = Circle;
