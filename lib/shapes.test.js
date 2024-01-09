const { Circle, Triangle, Square } = require('./shapes.js');

describe("Test to render a blue triangle", () => {
    test("", () => { 
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render.toEqual('<polygon fill="blue" />'))
    })
})

describe("Test to render a yellow circle", () => {
    test("", () => { 
        const shape = new Circle();
        shape.setColor("yellow");
        expect(shape.render.toEqual('<circle cx="25" cy="75" r="20" fill="yellow" />'))
    })
})

describe("Test to render a green Square", () => {
    test("", () => { 
        const shape = new Square();
        shape.setColor("green");
        expect(shape.render.toEqual('<rect fill="green" />'))
    })
})