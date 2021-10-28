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
    reload(){
        this.shotsLeft = 5;
    }
}

//Intanciando um OBJETO
let fenixWeapon = new SpaceshipWeapon(10);
try{
    fenixWeapon.shoot();
    fenixWeapon.shoot();
    fenixWeapon.shoot();
    fenixWeapon.shoot();
    fenixWeapon.shoot();
    fenixWeapon.shoot();
} catch(e){
    //o sexto tiro caiu nesse erro
    console.log(e.message);
    //recarregar a nave
    fenixWeapon.reload();
}
console.log(fenixWeapon);
