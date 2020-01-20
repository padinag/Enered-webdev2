class Beeing {
    constructor(options){
        this.alive = options.alive;
        this.mamifer = options.mamifer;
        this.age = options.age;
        this.get = options.gen;
        this.geographicalRegion = options.geographicalRegion;
    }

    isOld(){
        if (age > 60){
            return true;
        } else {
            return false
        }
    }
}