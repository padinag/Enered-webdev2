class Owner {
    // constructor(name, address, phone, cats) {
    constructor(ownerProperties) {
        this.name = ownerProperties.name;
        this.address = ownerProperties.address;
        this.phone = ownerProperties.phone;
        this.cats = ownerProperties.cats;

    }

    taketoVet() {
        console.log("taketoVet");
    }

    takeCatToVet() {
        console.log("takeCatToVet");
    }

    feedCat() {
        console.log("feed");
    }

    pet() {
        console.log("pet");
    }
    removeCat(catName) {
        for (var i = 0; i < this.cats.length; i++){
            if (this.cats[i].name == catName){
                this.cats.splice(i, 1);
                return;
            }
        }
    }
    addCat(cat) {
       this.cats.push(cat);
    }

}