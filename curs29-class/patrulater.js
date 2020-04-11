class Patrulater extends GeometricShape{
    constructor(x, y, width, height){
        super("patrulater");
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }

    area(){
     //  return this.width * this.height;
    }

    perimeter(){
        return 2 * this.width + 2 * this.height;
    }

}