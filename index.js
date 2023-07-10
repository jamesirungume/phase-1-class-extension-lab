class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
  
    get countSides() {
      return this.sides.length;
    }
  
    get perimeter() {
      return this.sides.reduce((total, side) => total + side, 0);
    }
  }
  
  class Triangle extends Polygon {
    get isValid() {
      if (this.countSides !== 3) {
        return false;
      }
  
      const [sideA, sideB, sideC] = this.sides;
      return sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA;
    }
  }
  
  class Square extends Polygon {
    get isValid() {
      if (this.countSides !== 4) {
        return false;
      }
  
      return this.sides.every((side) => side === this.sides[0]);
    }
  
    get area() {
      if (this.isValid) {
        return this.sides[0] ** 2;
      }
    }
  }
  