const arePointsEqual = function(pointA, pointB) {
  return pointA.x === pointB.x && pointA.y === pointB.y;
};

class Circle {
  constructor(center, radius) {
    this.center = {
      x: center.x,
      y: center.y
    };
    this.radius = radius;
  }

  toString() {
    return `[Circle @(${this.center.x},${this.center.y}) radius ${this.radius}]`;
  }

  isEqualTo(other) {
    if (!(other instanceof Circle)) return false;
    return (
      this === other ||
      (arePointsEqual(this.center, other.center) &&
        this.radius === other.radius)
    );
  }
}

module.exports = { Circle };
