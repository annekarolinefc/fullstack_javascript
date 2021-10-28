class Spaceship{
    static get desacceleration(){
        return 0.17;
    }
    constructor(nameSpaceship, crew){
        this.nameSpaceship = nameSpaceship;
        this.crew = crew;
        this.currentVelocity = 0;
    }
    //metódo get

    //método set

    speedUp(acceleration){
        this.currentVelocity=this.currentVelocity +(acceleration * (1 + (1-desacceleration)));
    }
    speedDown(){

    }
    printAndExit(){
        alert("Nome: \nQuantidade de Tripulantes: \nVelocidade atual: ")
    }
}

let nameSpaceship = prompt("Digite o nome da name: ")
let nameSpaceship = prompt("Qual o número de tripulantes: ")

let chooseOption = "";
let option = prompt("Escolha uma das opções: \n"+
                " 1- Acelerar a nave \n" +
                " 2- Trocar a nave \n" +
                " 3- Imprimir e sair \n"
                );

    switch(option){
        case "1":
            break;
        case "2":
            this.currentVelocity = 0;
            break;
        case "3":
            break;
        default:
            break;
    }
