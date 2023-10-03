class Triangle {
  constructor(logoText, textColor, shapeColor) {

    this.logoText = logoText
    this.textColor = textColor
    this.shapeColor = shapeColor
   
  }
render(){
  return `<svg version="1.1"
  width="300" height="200"
  xmlns="http://www.w3.org/2000/svg">


<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>

</svg>`
}

};

class Circle {
  constructor(logoText, textColor, shapeColor) {

    this.logoText = logoText
    this.textColor = textColor
    this.shapeColor = shapeColor
   
  }
render(){
  return `<svg version="1.1"
  width="300" height="200"
  xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>

</svg>`
}
};
class Square {
  constructor(logoText, textColor, shapeColor) {

    this.logoText = logoText
    this.textColor = textColor
    this.shapeColor = shapeColor
   
  }
render(){
  return `<svg version="1.1"
  width="300" height="200"
  xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="${this.shapeColor}" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>

</svg>`
    



  }
};


module.exports = {Triangle, Circle, Square};