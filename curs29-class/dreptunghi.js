class Dreptunghi extends Patrulater {
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.name = "dreptunghi";
        //Patrulater.prototype.constructor.call(this, x, y, width, height)
    }

    area() {
        return this.width * this.height;
    }

}