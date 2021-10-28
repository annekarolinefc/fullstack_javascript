function adicionar(){
    //obtendo os valores do input
    let area = document.querySelector("input[name='area']").value;
    let numero = document.querySelector("input[name='numero']").value;
    let bairro = document.querySelector("input[name='bairro']").value;
    let cidade = document.querySelector("input[name='cidade']").value;

    //criando cada item da lista
    let newListValue = document.createElement("li");
    //adicionando texto dentro do item criado
    newListValue.innerText = area + "m², número " + numero + " (" + bairro + " - " + cidade + ") ";

    //criando o botão para deletar item
    let removeButton = document.createElement("button");
    //definindo o tipo de botão
    removeButton.type = "button"
    //inserindo o texto do botão criado
    removeButton.innerText = "Remover"
    //setando o atributo
    removeButton.setAttribute("onclick", "remover(this)")

    //adicionar botão dentro do li
    newListValue.appendChild(removeButton)
    document.getElementById("house-list").appendChild(newListValue)
}

function remover( button){
    //pegando o pai do button (no caso, o li) - todo o elemento
    let liToRemove = button.parentNode;
    //removendo o elemento de dentro do house-list
    document.getElementById("house-list").removeChild(liToRemove)
}
