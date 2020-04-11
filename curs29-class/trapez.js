class Trapez extends Patrulater {
    constructor(x, y, bazaMica, bazaMare, l1, l2, h) {
        //l1 = width, l2 = height
        super(x, y, bazaMare, h);
        this.bazaMica = bazaMica;
        this.l1 = l1;
        this.l2 = l2;
    }
 perimeter(){
     return this.width + this.bazaMica + this.l1 + this.l2;
 }

 area(){
    return (this.width + this.bazaMica) * this.height/ 2;
 }

}