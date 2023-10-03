const {Triangle, Circle, Square} = require('./lib/shapes')
// const fs = require('fs');
const inquirer = require('inquirer');

const userInput =[
  {
    // type: 'input',
    name: 'logoText',
    message: 'Enter three letters max for your logo.'
  },
  {
    name: 'textColor',
    message: 'Enter your color choice for your text.'
  },
  {
    name: 'shapeColor',
    message: 'Enter your color choice for your shape.'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Please choose a shape.',
  choices: ['circle', 'triangle', 'square']
 }];

 function init () {
  inquirer.prompt(userInput).then(function (answers) {


let shape;
if (answers.shape === 'triangle')
{
  shape = new Triangle(answers.logoText, answers.textColor, answers.shapeColor);
}else if (answers.shape === 'circle'){
  shape = new Circle(answers.logoText, answers.textColor, answers.shapeColor);
} else if (answers.shape === 'square'){
  shape = new Square(answers.logoText, answers.textColor, answers.shapeColor);
}
console.log(shape);

const logo = shape.render()
console.log(logo);

  })
 
 };

 init();
