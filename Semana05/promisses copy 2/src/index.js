let komodoShip = {
    name: "Komodo",
    velocity: 80,
    acceleration: 10
}

const velocityAfter2Seconds = (velocity, acceleration) => {
    return new Promise(function(resolve, reject){
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


velocityAfter2Seconds(komodoShip.velocity, komodoShip.acceleration).then(function(velocity){
    komodoShip.velocity = velocity;
    console.log("Depois de acelerar: \n", komodoShip)
}).catch(message =>{
    console.log(`Komodo: ${message}`)
})

console.log("Execução de Promisse")
console.log(komodoShip)