class Shape {
    constructor(textContent, textColor, shapeColor){
        this.textContent = textContent;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        // this.shapeElement = 'circle cx="25" cy="75" r="20"'
    }
    setColor(newColor){
        this.shapeColor = newColor
    }
    setText(newText){
        this.textContent = newText
    }
    setTextColor(newTextColor){
        this.textColor = newTextColor
    }
}

class Circle extends Shape {
    constructor(textContent, textColor, shapeColor){
        super(textContent, textColor, shapeColor)
        // this.shapeElement = 'circle cx="25" cy="75" r="20"'
    }
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
    }
}

class Triangle extends Shape {
    constructor(textContent, textColor, shapeColor){
        super(textContent, textColor, shapeColor)
    }
    render(){
        // triangle example found at: https://stackoverflow.com/questions/54955165/create-a-equilateral-triangle-using-svg-in-html-with-base-and-height-100px
        return `<polygon points="50 15, 100 100, 0 100" fill="${this.shapeColor}" />`
    }
}

class Square extends Shape {
    constructor(textContent, textColor, shapeColor){
        super(textContent, textColor, shapeColor)
    }
    render(){
        return `<rect width="100%" height="100%" fill="${this.shapeColor}" />`
    }
}

class Hexagon extends Shape {
    constructor(textContent, textColor, shapeColor){
        super(textContent, textColor, shapeColor)
    }
    render(){
        // hexagon example found at: https://www.w3schools.com/graphics/svg_polygon.asp
        return `<polygon points="150,75 258,137 258,262 150,325 42,262 42,137" fill="${this.shapeColor}" />`
    }
}

module.exports = { Shape, Circle, Triangle, Square, Hexagon };