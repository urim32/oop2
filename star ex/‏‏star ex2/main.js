class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    plus() {
        let sum = 0;
        return (sum = this.x + this.y);
    }
}

const point1 = new Point(3, 4);
point1.plus();
