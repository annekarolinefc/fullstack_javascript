
export default class{
    constructor(spaceship){
        this.spaceship = spaceship
    }

    turnOn(){
        this.checkCurrentLoad().then(carga =>{
            console.log(`(${this.spaceship.name}) Partida autorizada: carga atual em ${carga} %`)
        }).catch(carga =>{
            console.log(`(${this.spaceship.name}) Partida não autorizada: carga em apenas ${carga} %`)
        })
    }

    checkCurrentLoad(){
        return new Promise((resolve, reject)=>{
            let currentLoad = this.spaceship.porcentagemCargaAtual()
            if(currentLoad >=30){
                resolve(carga)
            }else{
                reject(carga)
            }
        })
    }
}