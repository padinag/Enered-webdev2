class Triunghi extends GeometricShape {
    constructor(l1, l2, l3) {
        super("triunghi");
        this.l1 = l1;
        this.l2 = l2;
        this.l3 = l3;

    }
    perimeter() {
        return this.l1 + this.l2 + this.l3;
    }

    area() {
        var perimeter = this.perimeter();
        return Math.sqrt(perimeter * (perimeter - this.l1) * (perimeter - this.l2) * (perimeter - this.l3));
    }
}