const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square, Hexagon } = require('./lib/shapes.js');

const userInput = [
    {
        type: 'input',
        name: 'textContent',
        message: 'Input up to three characters for your logo:'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Input a color for the text. Enter a hex number or color name:'

    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for your logo:',
        choices: [
            'Circle',
            'Triangle',
            'Square',
            'Hexagon'
        ]
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Input a color for the shape. Enter hex number or color nanme:'
    }
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log("error", err) : console.log("Success!");
    });
}

inquirer.prompt(userInput).then((response) => {
    let svg;
    if (response.shape === "Circle") {
        svg = new Circle()
    }
    if (response.shape === "Triangle") {
        svg = new Triangle()
    }
    if (response.shape === "Square") {
        svg = new Square()
    }
    if (response.shape === "Hexagon") {
        svg = new Hexagon()
    }
    
    svg.setColor(response.shapeColor)
    svg.setText(response.textContent)
    svg.setTextColor(response.textColor)
    let logo = `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    ${svg.render()}

 <text x="150" y="125" font-size="60" text-anchor="middle" fill="${svg.textColor}">${svg.textContent}</text>

</svg>`
    writeToFile("logo.svg", logo)
})
