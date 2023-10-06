const { Triangle } = require('../shapes');
const { Circle } = require('../shapes');
const { Square } = require('../shapes');

test('Testing for Triangle.', () => {
  const shape = new Triangle('SVG', 'white', 'green'); 
  shape.setColor('blue'); 

  expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');


});

test('Testing for Circle.', () => {
  const shape = new Circle('SVG', 'white', 'green'); 
  shape.setColor('blue'); 

  expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');

});

test('Testing for Square.', () => {
  const shape = new Square('SVG', 'white', 'green'); 
  shape.setColor('blue'); 

  expect(shape.render()).toEqual('<rect width="100%" height="100%" fill="red" />');


});
