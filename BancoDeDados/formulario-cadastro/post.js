//IMPORTAR OS DADOS NO SERVIDOR
function fazPost(url, body){
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))
    
    request.onload = function() {
        console.log(this.responseText)
    }
    return request.responseText
}

function cadastraUsuario(){
    event.preventDefault(); //nao quer que carregue a página
    url = "http://127.0.0.1:5000/users";

    //PEGAR OS  INPUTS DO FORMULÁRIO
    let nome = document.getElementById("nome")
    let email = document.getElementById("email")
    console.log(nome)
    console.log(email)

    //PEGAR OS VALORES DIGITADOS NOS INPUTS
    nome.value
    email.value 

    //formato json da resposta
    body = {
        "name" : nome,
        "email" : email
    }

    //enviar pro servidor 
    fazPost(url, body)
}