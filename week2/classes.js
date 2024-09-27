class Rectangle {
    constructor(height, width) {
        this.height = height
        this.width = width
    }
    area() {
        return this.width * this.height
    }

}

const area = new Rectangle()

console.log(area.area(2, 69))