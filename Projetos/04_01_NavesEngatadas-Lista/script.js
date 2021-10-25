class Spaceship{
    constructor(name, crewQuantify, isHitched, isDoorOpen){
        this.name = name;
        this.crewQuantify = crewQuantify;
        this.isHitched = false;
        this.isDoorOpen = false;
    }
    hitch(){
            this.isHitched = true;
            this.isDoorOpen = true;
    }
}

function showMenu(){
    let chooseOption;
    while(chooseOption !="1" && chooseOption !="2" && chooseOption!="3"){
        chooseOption = prompt("O que deseja fazer? \n" +
        "1-Realizar Engate \n" +
        "2-Imprimir Naves\n"+
        "3-Sair do Programa\n");
        }
        return chooseOption;
    } 

    function createSpaceship(){
        let spaceshipName = prompt("Informe o nome da nave: ");
        let crewQuantify = prompt("Informe o numero de tripulantes:");
        let spaceship = new Spaceship(spaceshipName, crewQuantify);
    }

    function printSpaceshipList(spaceships) {
        let spaceshipList = "";
        spaceships.forEach((spaceship, index) => {
            spaceshipList += (index+1) + " - " + spaceship.name + "(" + spaceship.crewQuantify + " tripulantes)."
        });
        alert(spaceshipList);
    }

let hitchedSpaceship = [];

let chooseOption;

while(chooseOption!="3"){
    chooseOption = showMenu();

    switch(chooseOption){
        case "1":
            let spaceshipToAdd = createSpaceship();
            spaceshipToAdd.hitch();
            hitchedSpaceship.push(spaceshipToAdd)
            break;
        case "2":
            printSpaceshipList(hitchedSpaceship);
            break;
    }
}