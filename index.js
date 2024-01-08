const inquerer = require('inquerer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes.js');

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
        ]
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Input a color for the shape. Enter hex number or color nanme:'
    }
]