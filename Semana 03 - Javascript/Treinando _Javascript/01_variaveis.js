var a = 1;
var b = 2;

if(a === 1){
    var a = 11; //O ESCOPO É GLOBAL
    var b = 22; //O ESCOPO É LOCAL - DENTRO DO IF-BLOCK
    console.log(a); //11
    console.log(b); //22
}

console.log(a); //11
console.log(b); //2