class Beeing {
    constructor(options){
        this.name = options.name;
        this.alive = options.alive;
        this.mamifer = options.mamifer;
        this.age = options.age;
        this.gen = options.gen;
        this.geographicalRegion = options.geographicalRegion;
    }

    isOld(){
        if (this.age > 60){
            // return true;
            console.log(true);
        } else {
            // return false;
            console.log(false);
        }
    }
    breathe(){
        // return (this.name + "breathe!");
        console.log(this.name + " " + "breathe!");
    }
    
    eat(){
        // return (this.name + "eats!")
        console.log(this.name + " " + "eats!");
    }
}