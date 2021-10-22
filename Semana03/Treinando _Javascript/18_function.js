//FUNCTION SEM PARAMETRO
function greetPilot(){
    alert("Bom dia Piloto")
}
//CHAMADA DA FUNÇÃO
greetPilot()

//FUNCTION COM PARAMETRO
function speedUp(velocity, acceleration){
    let newVelocity = velocity+acceleration
    console.log("Nova Velocidade: " + newVelocity)
}
//CHAMADA DA FUNÇAO
speedUp(60,10)

//FUNCTION COM PARAMETRO COM VALOR PADRÃO
function greetPilot(namePilot, message){
    alert(message + ", " + namePilot)
}
//CHAMADA DA FUNÇÃO
greetPilot("John Mars", "Seja bem-vindo")

//FUNCTION COM PARAMETRO COM VALOR PADRÃO
function greetPilot(namePilot, message="Olá"){
    alert(message + ", " + namePilot)
}
//CHAMADA DA FUNÇÃO
greetPilot("John Mars")

//FUNCTION COM PARAMETRO
function soma(n1, n2, n3, n4){
    return n1+n2+n3+n4;
}
let somaNumeros= soma(1, 1, 1, 1)
//CHAMADA DA FUNÇÃO
console.log(somaNumeros)

//fUNCTION COM PARAMETRO
function media(n1, n2, n3, n4){
    return (n1+n2+n3+n4)/4
}
let mediaEscolar = media(20, 12, 16, 25);
//CHAMADA DA FUNÇÃO
console.log(mediaEscolar)

