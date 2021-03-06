const Point = require("./point");
const Line = require("./line");

console.log(__dirname, __filename);

const getLengthAndWidth = function(vertexA, vertexC) {
  const length = vertexA.x - vertexC.x;
  const width = vertexA.y - vertexC.y;
  return [Math.abs(length), Math.abs(width)];
};

const getVertexBandD = function(vertexA, vertexC) {
  return [new Point(vertexA.x, vertexC.y), new Point(vertexC.x, vertexA.y)];
};

class Rectangle {
  constructor(vertexA, vertexC) {
    this.vertexA = new Point(vertexA.x, vertexA.y);
    this.vertexC = new Point(vertexC.x, vertexC.y);
    Object.defineProperties(this, {
      vertexA: { writable: false },
      vertexC: { writable: false }
    });
  }

  toString() {
    const vertexA = `${this.vertexA.x},${this.vertexA.y}`;
    const vertexC = `${this.vertexC.x},${this.vertexC.y}`;
    return `[Rectangle (${vertexA}) to (${vertexC})]`;
  }

  get area() {
    const [length, width] = getLengthAndWidth(this.vertexA, this.vertexC);
    return length * width;
  }

  get perimeter() {
    const [length, width] = getLengthAndWidth(this.vertexA, this.vertexC);
    return 2 * (length + width);
  }

  isEqualTo(other) {
    if (!(other instanceof Rectangle)) return false;
    if (other === true) return true;
    return (
      this.vertexA.isEqualTo(other.vertexA) &&
      this.vertexC.isEqualTo(other.vertexC)
    );
  }

  hasPoint(point) {
    if (!(point instanceof Point)) return false;
    const [vertexB, vertexD] = getVertexBandD(this.vertexA, this.vertexC);
    const AB = new Line(this.vertexA, vertexB);
    const BC = new Line(vertexB, this.vertexC);
    const CD = new Line(this.vertexC, vertexD);
    const AD = new Line(this.vertexA, vertexD);
    return point.isOn(AB) || point.isOn(BC) || point.isOn(CD) || point.isOn(AD);
  }

  covers(point) {
    if (!(point instanceof Point)) return false;
    const [xMin, xMax] = [this.vertexA.x, this.vertexC.x].sort((a, b) => a - b);
    const [yMin, yMax] = [this.vertexA.y, this.vertexC.y].sort((a, b) => a - b);
    return point.x > xMin && point.x < xMax && point.y > yMin && point.y < yMax;
  }
}

module.exports = Rectangle;
