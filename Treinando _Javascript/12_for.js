let spaceship = "Helmet"
let newSpaceship = ""

for (let i=0; i<spaceship.length; i++){
    console.log(spaceship[i]); //percorre todos os caracteres
    if(spaceship[i] == "e"){
        newSpaceship += "i"
    } else{
        newSpaceship = spaceship[i];
    }
}
console.log(newSpaceship)

var pessoas = {
    nome: "Anne", 
    idade: 28,
    altura: 1.56,
}
console.log("Objeto pessoas: " + pessoas)

//for in -> percorrendo dentro de um objeto
for(x in pessoas){
    console.log("Mostrando o identificador das propriedades: " + x)
    console.log("Mostrando o conteudo das propriedades: " + pessoas[x])
    console.log(x + " -> " + pessoas[x])
    console.log("_________________________________")
}

//for of -> percorrendo dentro de um array
var frutas = ["banana", "mamao", "laranja", "abacate"];
for(x of frutas){
    console.log(x);
}