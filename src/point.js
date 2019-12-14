class Point {
  constructor(coords) {
    (this.x = coords.x), (this.y = coords.y);
  }

  toString() {
    return `[Point @(${this.x},${this.y})]`;
  }
}

module.exports = Point;
