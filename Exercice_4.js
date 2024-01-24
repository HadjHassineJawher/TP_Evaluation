class Shape {
    constructor(color) {
      this.color = color;
    }
  
    getDescription() {
      return `A shape of color ${this.color}`;
    }
  }
  
  class Circle extends Shape {
    constructor(color, radius) {
      super(color);
      this.radius = radius;
    }
  
    getDescription() {
      return `${super.getDescription()} with a radius of ${this.radius}`;
    }
  }
  
  const myCircle = new Circle("red", 5);
  
  console.log(myCircle.getDescription());