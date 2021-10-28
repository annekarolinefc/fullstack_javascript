//comando para lançar os proprios erros

//Criação da CLASSE
class SpaceshipWeapon{
    constructor(identifier){
        this.identifier = identifier;
        this.shotsLeft=5;
    }
    //Método para realizar tiro
    shoot(){
        if(this.shotsLeft>0){
            console.log("Bang!");
            this.shotsLeft-=1
        }else{
            throw new Error("Arma " + this.identifier + " sem munição.")
        }
        
    }
}

//Intanciando um OBJETO
let fenixWeapon = new SpaceshipWeapon(10)
fenixWeapon.shoot();
console.log(fenixWeapon);
fenixWeapon.shoot();
console.log(fenixWeapon);
fenixWeapon.shoot();
console.log(fenixWeapon);
fenixWeapon.shoot();
console.log(fenixWeapon);
fenixWeapon.shoot();
console.log(fenixWeapon);
fenixWeapon.shoot();
console.log(fenixWeapon);

