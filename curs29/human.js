class Human extends Beeing{
    constructor(options){
        options.mamifer = true; //modific proprietati - suprascriu
        super(options);
        this.married = options.merried;
    }
}

