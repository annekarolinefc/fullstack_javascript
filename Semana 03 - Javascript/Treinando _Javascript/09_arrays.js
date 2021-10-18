var fruit1 = ["banana", "apple", "pear"];
var fruit2 = ["orange", "stranberry"];


//CONCAT() -> CONCATENAÇÃO DE ARRAYS
var totalFruits = fruit1.concat(fruit2);
console.log(`Array de frutas 01: ${fruit1}`);
console.log(`Array de frutas 02: ${fruit2}`);
console.log(totalFruits);

//INDEXOF() -> RETORNA O TIPO PRIMITIVO DO OBJETO ESPECIFICADO
console.log(totalFruits.indexOf("apple")) 
//JOIN() -> Transforma todos os elementos do array em uma string.
var totalFruits = ["banana", "apple", "pear", "orange", "stranberry"]
console.log(totalFruits.join())
console.log(totalFruits.join( [separador = ', ']))
console.log(totalFruits.join( [separador = ' ... ']))
//LASTNDEXOF() -> Mostra a ultima posição do elemento especificado na busca
console.log("A ultima posição de r é: " + "palavra".lastIndexOf("r"))
//POP() 
var numeros = [1, 2, 3, 4]
numeros.pop() 
console.log(numeros)
//PUSH()
numeros.push(4)
console.log(numeros)

//REVERSE()
numeros.reverse()
console.log(numeros)

//SHIFT() -> remove o primeiro elemento do array.
const array1 = [1, 2, 3];
const firstElement = array1.shift();
console.log(array1); // expected output: Array [2, 3]
console.log(firstElement);// expected output: 1

//SLICE()
var frutasSupermercado = ["banana", "laranja", "limão", "maça"]
var frutasCitricas = frutasSupermercado.slice(1, 3)
console.log("As frutas citricas são: " + frutasCitricas)

//SORT() -> ordem alfabetica
var alfabeto = ["b", "d", "a", "w", "m", "c", "y"]
console.log("A ordem será: " + alfabeto.sort())

//SLICE()
frutasSupermercado = ["banana", "laranja", "limão", "maça"]
frutasSupermercado.splice(4, 0, "maracujá")
console.log("Somente adicionei um elemento na posição 04: " + frutasSupermercado);
frutasSupermercado.splice(0, 1, "Abacaxi")
console.log("Adicionei um elemento na posiçao 0 e removi um elemento: " + frutasSupermercado)

//TOSTRING()
var numeroResidencial = 1234
var numerico = typeof numeroResidencial;
var string = typeof numeroResidencial.toString()
console.log("O numero residencial é do tipo " + numerico)
console.log("O numero residencial, utilizando o metodo toString() é do tipo " + string)


//UNSHIFT() -> adiciona um ou mais elementos no incio de um array e retorna o numero de elementos
var arr = [1, 2];
arr.unshift(0); // result of call is 3, the new array length
// arr is [0, 1, 2]
arr.unshift(-2, -1); // = 5
// arr is [-2, -1, 0, 1, 2]
arr.unshift([-3]);
// arr is [[-3], -2, -1, 0, 1, 2]

//VALEUOF() -> retorna o valor primitido de um objeto string
var str = "Hello World!"
console.log(str.valueOf())

