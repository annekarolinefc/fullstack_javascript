//estamos criando um objeto a partir de uma classe nativa do JS chamada Object.
class spaceship{
    constructor(myName, type = "Descoberta"){
        this.name = myName;
        this.type = type;
        this.velocity = 0;
    }

    //criando método
    speedUp(acceleration){
        this.velocity+=acceleration;
    }
}
//instanciado uma classe
//instancia de uma classe é o que da origem a um objeto
let mySpaceship = new spaceship();
let darwin = new spaceship("Darwin");
let helmet = new spaceship("Helmet", "Batalha");
let artemis = new spaceship("Ártemis");
console.log(mySpaceship)
console.log(darwin)
console.log(helmet)
console.log(artemis)

//chamar método
artemis.speedUp(10);
artemis.speedUp(15);

//construtor
class SpacialStation{
    constructor(name, plataformsQuantity){
        this.name = name;
        this.plataformsQuantity = plataformsQuantity
    }
}

let observatory = new SpacialStation("Observatório", 48)
console.log(observatory)

//CLASSES ASSOCIADAS
class Captain{
    constructor(name, age, flightHours){
        this.name = name;
        this.age = age;
        this.flightHours = flightHours;
    }
}

class spaceshipCaptain{
    constructor(name, crewQuantify, captainName, captainAge, captainFlightHous){
        this.name = name;
        this.crewQuantify= crewQuantify;
        this.captain = new Captain(captainName, captainAge, captainFlightHous)
    }
}

let spaceshipOne = new spaceshipCaptain("Ártmis", 13, "Will Grey", 45, 15000)
console.log(spaceshipOne)

//HERANÇA