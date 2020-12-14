class Polygon {
  constructor(sideLengths) {
    this.sideLengths = sideLengths;
  }
  perimeter() {
    return this.sideLengths.reduce((a, c) => a + c);
  }
}
