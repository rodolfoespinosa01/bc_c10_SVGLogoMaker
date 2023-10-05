class Shape {
  constructor(logoText, textColor, shapeColor) {
    this.logoText = logoText;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }

  setColor(color) {
    this.shapeColor = color;
  }

  render() {
    return `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${this.getShape()}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">
          ${this.logoText}
        </text>
      </svg>`;
  }
}

class Triangle extends Shape {
  constructor(logoText, textColor, shapeColor) {
    super(logoText, textColor, shapeColor);
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