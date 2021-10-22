var data = new Date();
console.log(data);

//extraindo os valores
var dia = data.getDate();
var mes = data.getMonth()+1;
var ano = data.getUTCFullYear();
var hora = data.getHours();
var minuto = data.getMinutes();
var segundo = data.getSeconds();


console.log(`${dia}/${mes}/${ano}`)
console.log(`${hora}:${minuto}:${segundo}`)

