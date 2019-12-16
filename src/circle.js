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
}

module.exports = { Circle };
