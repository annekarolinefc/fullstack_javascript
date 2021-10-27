class TransportSpaceship{
    constructor(nameSpaceship){
        this.nameSpaceship=nameSpaceship;
        this.currentVelocity = 0;
    }

    //utilizando o set para validar
    set velocity(newVelocity){ 
        if (newVelocity>120){
            this.currentVelocity = 120
        } else{
            this.currentVelocity = newVelocity
        }
    }
}

let spaceship = new TransportSpaceship("Transportadora");
spaceship.velocity = 130;
console.log(spaceship)