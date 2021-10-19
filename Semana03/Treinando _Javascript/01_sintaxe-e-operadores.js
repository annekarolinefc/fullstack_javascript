//Crie uma função que recebe dois números como parâmetros
function comparaNumeros(num1, num2){
    const saoIguais = (num1 === num2);
    const soma = num1+num2;


    console.log(`São Iguais: ${saoIguais}`)
    console.log(`Soma: ${soma}`);
    if(saoIguais){
        console.log(`Os numeros ${num1} e ${num2} são iguais.`)
    }else{
        console.log(`Os numeros ${num1} e ${num2} não são iguais.`)
    }

    
    if(soma>10 && soma<20){
        console.log(`Sua soma é ${soma}, que é maior que 10 e menor que 20`)
    }else if (soma<10){
        console.log(`Sua soma é ${soma}, que é menor que 10.`)
    }else if (soma>20){
        console.log(`Sua soma é ${soma}, que é maior que 20`)
    }
}

console.log("TENTANDO 1 E 2")
comparaNumeros(1,2);