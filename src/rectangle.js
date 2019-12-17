const Point = require("./point");

class Rectangle {
  #pointB;
  #pointD;
  constructor(pointA, pointC) {
    this.pointA = new Point(pointA.x, pointA.y);
    this.pointC = new Point(pointC.x, pointC.y);
    this.#pointB = new Point(pointA.y, pointC.x);
    this.#pointD = new Point(pointA.x, pointC.y);
  }

  toString() {
    const pointA = `${this.pointA.x},${this.pointA.y}`;
    const pointC = `${this.pointC.x},${this.pointC.y}`;
    return `[Rectangle (${pointA}) to (${pointC})]`;
  }

  get area() {
    const length = this.pointA.x - this.pointC.x;
    const width = this.pointA.y - this.pointC.y;
    return Math.abs(length * width);
  }

  get perimeter() {
    const length = this.pointA.x - this.pointC.x;
    const width = this.pointA.y - this.pointC.y;
    return 2 * (Math.abs(length) + Math.abs(width));
  }

  isEqualTo(other) {
    if (!(other instanceof Rectangle)) return false;
    return (
      this.pointA.isEqualTo(other.pointA) && this.pointC.isEqualTo(other.pointC)
    );
  }

  covers(point) {
    if (!(point instanceof Point)) return false;
    return (
      point.x <= this.pointA.x &&
      point.x >= this.pointC.x &&
      point.y <= this.pointA.y &&
      point.y >= this.pointC.y
    );
  }
}

module.exports = Rectangle;
