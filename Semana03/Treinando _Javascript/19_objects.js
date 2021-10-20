//Propriedades -> caracteristicas de um objeto
//Métodos -> ações de um objeto

//CRIAÇÃO DE UM OBJETO DE NOME CARRO 
var carro = {
    modelo: "kicks",
    cor: "branco",
    potencia: "110cv"
};
//ATRIBUIR OU MODIFICAR VALORES DE UM OBJETO
carro.modelo = "Gol";
carro.cor="cinza";
carro.potencia = "90cv";

var pessoa = {
    nome: "Anne",
    sobrenome: "Karoline",
    nomeCompleto: function(){
        return this.nome + " " + this.sobrenome
    }
};
//IMPRIMINDO O OBJETO NO CONSOLE
console.log(pessoa)
//INVOCANDO AS CARACTERISTICAS
console.log(pessoa.nome)
console.log(pessoa.sobrenome)
//INVOCANDO O MÉTODO
console.log(pessoa.nomeCompleto())

//CRIANDO UMA PROPRIEDADE
pessoa.peso = 75;
console.log(pessoa.peso)