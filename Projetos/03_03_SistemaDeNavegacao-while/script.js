let warpCount = 0; //nao passou por nenhum dobra ainda
let chooseOption = "";
let spaceshipName = prompt("Qual o nome da Nave?")

chooseOption = prompt("Deseja entrar em dobra espacial? \n1 - Sim\n2 - Não")

while(chooseOption == "1"){
    warpCount +=1;
    chooseOption = prompt("Deseja realizar a próxima dobra?  \n1 - Sim\n2 - Não");
}

    alert("A nave " + spaceshipName + " realizou " + warpCount + " dobras espaciais.")