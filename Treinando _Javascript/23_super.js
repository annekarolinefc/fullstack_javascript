class Spaceship{
    constructor(name, maxCrew, maxRecommendedValue){
        this.name=name;
        this.maxCrew = maxCrew;
        this.maxRecommendedValue=maxRecommendedValue;
        this.currentVelocity=0;
    }
    speedUp(acceleration){
        this.currentVelocity+=acceleration;
        if(TouchList.currentVelocity>this.maxRecommendedValue){
            alert("VELOCIDADE MAXIMA ULTRAPASSADA! \n Diminua a velocidade ou poderá provocar danos à nave.")
        }
    }
}

class TransportSpaceship extends Spaceship{
    constructor(name, maxCrew, maxRecommendedValue, maxLoadWeight){
        super(name, maxCrew, maxRecommendedValue);
        this.maxLoadWeight = maxLoadWeight
    }
    speedUp(acceleration){
        acceleration /=2;
        alert("Incrementando velocidade em " + acceleration + "km/s")
        super.speedUp(acceleration)
    }
}

let TransportSpaceship = new TransportSpaceship("Transportadora", 4, 100, 400);
console.log(TransportSpaceship)
TransportSpaceship.speedUp(210)