let komodoShip = {
    name: "Komodo",
    velocity: 80,
    acceleration: 10
}

const velocityAfter2Seconds = (velocity, acceleration) => {
    new Promise(function(resolve, reject){
        if(acceleration > 0){
            velocity+=acceleration * 2
            console.log(`Nova velocidade: ${velocity}`)
            resolve(velocity)
        }else{
            console.log("Aceleração inválida")
            reject("Não possui aceleração.")
        }
    })
}


velocityAfter2Seconds(komodoShip.velocity, komodoShip.acceleration)

console.log("Execução de Promisse")