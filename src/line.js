class Line {
  start = {};
  end = {};
  constructor(x1, y1, x2, y2) {
    this.start.x = x1;
    this.start.y = y1;
    this.end.x = x2;
    this.end.y = y2;
  }

  toString() {
    return `Line (${this.start.x},${this.start.y})(${this.end.x},${this.end.y})`;
  }

  isEqualTo(otherLine) {
    const isStartEqual =
      this.start.x === otherLine.start.x && this.start.y === otherLine.start.y;
    const isEndEqual =
      this.end.x === otherLine.end.x && this.end.y === otherLine.end.y;
    return isStartEqual && isEndEqual;
  }
}

module.exports = Line;
