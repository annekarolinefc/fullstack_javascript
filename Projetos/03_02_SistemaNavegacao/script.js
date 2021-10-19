let pilotName = prompt("Olá Piloto. Qual o seu nome?");
console.log(pilotName);
let velocidade = 0;
let novaVelocidade = prompt("Gostaria de acelerar a nave em quantos km/s?");
let confirmVelocity = confirm("A velocidade será de " + novaVelocidade + "km/s? Correto?");
if(confirmVelocity){
    velocidade = novaVelocidade
} else{
    alert("Velocidade Não Confirmada.")
}

if (velocidade <= 0){
    alert("Nave está parada. Considere partir e aumentar a velocidade!")
} else if(velocidade>0 && velocidade<40){
    alert("Você está devagar, podemos aumentar mais.")
} else if(velocidade>=40 && velocidade<80){
    alert("Parece uma boa velocidade para manter.")
} else if(velocidade >=80 && velocidade <100){
    alert("Velocidade alta. Considere diminuir.")
} else {
    alert("Velocidade perigosa. Controle automático forçado.")
}
alert(pilotName + ", sua velocidade é de " + velocidade + "km/s.")