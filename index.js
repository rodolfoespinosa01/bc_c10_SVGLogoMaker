const {Triangle, Circle, Square} = require('./lib/shapes')
const fs = require('fs');
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
      let logo;

      let shape;

      if (answers.shape === 'triangle')
      {
        shape = new Triangle();
      }else if (answers.shape === 'circle'){
        shape = new Circle();
      } else if (answers.shape === 'square'){
        shape = new Square();
      }

      shape.setColor(answers.shapeColor);
      // console.log(shape);

      

      logo = `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shape.render()}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.logoText}</text>
      </svg>`
      console.log(logo);



  fs.writeFile('../examples/logo.svg', logo, (err) => {
    if (err) throw err;

    console.log('File created');
  });
  });
 };

 init();

