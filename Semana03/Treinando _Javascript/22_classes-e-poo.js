//HERANÇA
class Spaceship{
    constructor(name, maxCrew, maxRecommendedVelocity){
        this.name = name;
        this.maxCrew = maxCrew;
        this.maxRecommendedVelocity = maxRecommendedVelocity;
        this.currentyVelocity = 0; //atribuindo um valor na instanciação
    }

    //método
    speedUp(acceleration){
        this.currentyVelocity += acceleration
        if(this.currentyVelocity>this.maxRecommendedVelocity){
            alert("Velocidade maxima ultrapassada!!\n Diminua ou poderá provocar danos à nave.")
        }
    }

}

//APLICANDO A HERANÇA
class BattleSpaceship extends Spaceship{
    stop(){
        this.currentyVelocity = 0;
        alert("Recolhendo armas e parando nave de batalha.")
    }
}
class DiscoverySpaceship extends Spaceship{
    stop(){
        this.currentyVelocity = 0;
        alert("Recolhendo equipamento de amostras e parando nave de descoberta.")
    }
}

let darwin = new DiscoverySpaceship("Darwin", 10, 200)
let fenix = new BattleSpaceship("Fenix", 8, 240)

console.log(darwin)
console.log(fenix)


//sobreescrevendo metodos
class TransportSpaceship extends Spaceship{
    speedUp(){
        alert("Naves de transporte so aumentam a velocidade em 1km/s.")
        this.currentyVelocity+=1;

    }
}

let transportSpaceship = new TransportSpaceship("Transportadors", 4, 100)
transportSpaceship.speedUp()