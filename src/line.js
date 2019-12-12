const arePointsEqual = function(pointA, pointB) {
  return pointA.x === pointB.x && pointA.y === pointB.y;
};

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
    const isStartEqual = arePointsEqual(this.start, otherLine.start);
    const isEndEqual = arePointsEqual(this.end, otherLine.end);
    return isStartEqual && isEndEqual;
  }
}

module.exports = Line;
