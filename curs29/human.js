class Human extends Beeing {
    constructor(options) {
        super(options);
        options.mamifer = true; //modific proprietati - suprascriu
        this.married = options.merried;
        this.address = options.address;
        this.phoneNumber = options.phoneNumber;
        this.emailAddress = options.emailAddress;
    }

    isVegan(){
        console.log(this.name + " este carnivora!");
    }
}

