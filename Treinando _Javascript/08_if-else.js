//ESTRUTURA DE DECISÃO IF/ELSE
//Utilizado quando deseja dar fluxo diferente.

//Variavel recebeu a nota do alunos
let notaAluno = 8;
///entrou na estrutura de decisão
if(notaAluno<7){
    console.log("REPROVADO")
} else {
    console.log("APROVADO")
}
let notaAluno2 = 10;
if(notaAluno2<7){
    console.log("REPROVADO")
}else if(notaAluno2 == 10){
    console.log("UAU! NOTA MÁXIMA!")
} else {
    console.log("APROVADO")
}

//Trabalhando com funções
function status_aluno(nota){
    if(nota<=7){
        return "Reprovado";
    }else{
        return "Aprovado";
    }
}
console.log(status_aluno(1))
console.log(status_aluno(7))
console.log(status_aluno(10))