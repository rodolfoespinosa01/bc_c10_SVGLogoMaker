class Shape {
  constructor() {
    this.shapeColor = '';
  }

  setColor(color) {
    this.shapeColor = color;
    
  }
}

class Triangle extends Shape {
  constructor() {
    super();

    
  }

  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
  }
}

class Circle extends Shape {
  constructor(logoText, textColor, shapeColor) {
    super(logoText, textColor, shapeColor);
  }

  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
  }
}

class Square extends Shape {
  constructor(logoText, textColor, shapeColor) {
    super(logoText, textColor, shapeColor);
  }

  render() {
    return `<rect width="100%" height="100%" fill="red" />`;
  }
}

module.exports = { Square, Triangle, Circle };