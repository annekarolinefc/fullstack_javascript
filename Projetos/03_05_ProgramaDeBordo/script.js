let nameSpaceship = prompt("Digite o nome da nave: ")
let spaceshipVelocity = 0;

let chosenOption;

function showMenu() {
    let option;
    while (option != "1" && option != "2" && option != "3" && option!="4") {
        option = prompt("Escolha umas das opções: \n" +
            "1 - Acelerar a nave em 5km/s. \n" +
            "2 - Desacelerar em 5km/s. \n" +
            "3 - Imprimir dados de bordo. \n" +
            "4 - Sair do programa.");
    }
    return option;
}

function speedUp(velocity) {
    let newVelocity = velocity + 5;
    return newVelocity;
}
function slowDown(velocity) {
    let newVelocity = velocity - 5;
    if (newVelocity < 0) {
        newVelocity = 0
    }
}

function printBoardData(name, velocity) {
    alert("Nome da espaçonave: " + name + "\nVelocidade atual: " + velocity + "km/s")
}

do {
    chosenOption = showMenu();
    switch (chosenOption) {
        case "1":
            spaceshipVelocity = speedUp(spaceshipVelocity)
            break;
        case "2":
            spaceshipVelocity = slowDown(spaceshipVelocity)
            break;
        case "3":
            printBoardData(nameSpaceship, spaceshipVelocity)
            break;
        default:
            alert("Encerrando Programa de Bordo");
            break;
    }
} while (chosenOption != "4")
