let spaceship = prompt("Nome da espaçonave: ");
let charSpaceship = prompt("Caractere que deseja sustituir: ")
let newChar = prompt("Caractere que deseja adicionar: ")
let newSpaceship = ''

for(let i=0; i<spaceship.length; i++){
    if(spaceship[i] == charSpaceship){
        newSpaceship += newChar;
    }else{
        newSpaceship == spaceship[i]
    }
    console.log(newSpaceship)
}
alert("O novo nome da nova nave é: " + newSpaceship)