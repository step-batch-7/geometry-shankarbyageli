const Point = require("./point");

class Rectangle {
  constructor(topLeft, bottomRight) {
    this.topLeft = new Point(topLeft.x, topLeft.y);
    this.bottomRight = new Point(bottomRight.x, bottomRight.y);
  }

  toString() {
    return `[Rectangle (${this.topLeft.x},${this.topLeft.y}) to (${this.bottomRight.x},${this.bottomRight.y})]`;
  }
}

module.exports = Rectangle;
