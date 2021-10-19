let departureDateEntry = prompt("Digite a data de partida (formato DD/MM/YYYY)") //data em forma de string

let departureData = moment(departureDateEntry, "DD/MM/YYYY"); //data formatada pela biblioteca moment

let today = moment(); //retorna a data de hoje

let dateDiff = today - departureData; //subtração dos milisegundos.

let chosenOption = prompt("Escolha como gostaria de exibir o tempo de partida \n1 - Segundos \n2 - Minutos \n3 - Horas \n4 - Dias");

if(chosenOption ==1){
    let secondsOfDeparture = Math.round(dateDiff/1000);
    alert("Tempo de Vôo: " + secondsOfDeparture + " segundos")
} else if(chosenOption ==2){
    let minutesOfDeparture = Math.round(dateDiff/1000 /60);
    alert("Tempo de Vôo: " + minutesOfDeparture + " minutos")
} else if(chosenOption ==3){
    let hoursOfDeparture = Math.round(dateDiff/1000 / 3600);
    alert("Tempo de Vôo: " + hoursOfDeparture + " horas")
} else if (chosenOption ==4){
    let daysOfDeparture = Math.round(dateDiff/1000 / 3600 / 24);
    alert("Tempo de Vôo: " + daysOfDeparture + " dias")
} else {
    alert("Opção inválida.")
}