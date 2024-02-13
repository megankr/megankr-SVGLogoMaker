const { Circle, Triangle, Square } = require('./shapes.js');

describe("Test to render a blue triangle", () => {
    test("", () => { 
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="50 15, 100 100, 0 100" fill="blue" />')
    })
})

describe("Test to render a yellow circle", () => {
    test("", () => { 
        const shape = new Circle();
        shape.setColor("yellow");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="yellow" />')
    })
})

describe("Test to render a green Square", () => {
    test("", () => { 
        const shape = new Square();
        shape.setColor("green");
        expect(shape.render()).toEqual('<rect width="100%" height="100%" fill="green" />')
    })
})