
class spaceship{
    constructor(carga, capacidadeMaxima){
        this.carga = carga
        this.capacidadeMaxima = capacidadeMaxima
    }
    porcentagemCargaAtual(){
        return this.carga*100/this.capacidadeMaxima
    }
}

export default spaceship