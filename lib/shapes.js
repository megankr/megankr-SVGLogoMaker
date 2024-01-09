class Shape {
    constructor(textContent, textColor, shapeColor){
        this.textContent = textContent;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        this.shapeElement = 'circle cx="25" cy="75" r="20"'
    }
}

class Circle extends Shape {
    constructor(textContent, textColor, shapeColor){
        super(textContent, textColor, shapeColor)
        this.shapeElement = 'circle cx="25" cy="75" r="20"'
    }
}

class Triangle extends Shape {
    constructor(textContent, textColor, shapeColor){
        super(textContent, textColor, shapeColor)
        this.shapeElement = 'polygon '
    }
}

class Square extends Shape {
    constructor(textContent, textColor, shapeColor){
        super(textContent, textColor, shapeColor)
        this.shapeElement = 'rect'
    }
}

module.exports = { Shape, Circle, Triangle, Square };