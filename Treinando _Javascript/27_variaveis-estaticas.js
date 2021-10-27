class Spaceship{
    static get desacelerarionRate(){
        return 0.15;
    }
    constructor(nameSpaceship){
        this.nameSpaceship = nameSpaceship;
        this.currentVelocity = 0;
    }
    speedUp(acceleration){
        this.currentVelocity+=(acceleration *(1-Spaceship.desacelerarionRate)) ;
    }
}

let spaceship = new Spaceship("Apollo");
spaceship.speedUp(100)
console.log(spaceship)