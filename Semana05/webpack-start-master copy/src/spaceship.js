
class spaceship{
    constructor(nome, carga, capacidadeMaxima){
        this.nome = nome;
        this.carga = carga
        this.capacidadeMaxima = capacidadeMaxima
    }
    porcentagemCargaAtual(){
        return this.carga*100/this.capacidadeMaxima
    }
}

export default spaceship