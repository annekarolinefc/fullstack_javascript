function showInfo(){
    //pegando o valor do input
    let name = document.querySelector("input[name='name']").value;
    //pegando o valor da selação - retornando text, que é o valor de dentro da opção selecionada
    let favoriteColor = document.querySelector("select[name='color'] option:checked").text
    //pegando o valor do radio. Pegando o valor selecionado=checked
    let likeProgramming = document.querySelector("input[name='like-programming']:checked").value
    //pegando os valores do checkedbox
    let developerOption = document.querySelectorAll("input[name='developer-options']:checked")

    //criação de um array
    let optionsValue = []
    developerOption.forEach(element =>
        {
            optionsValue.push(element.value); //pega cada valor selecionado pelo developerOption
        })
    //unindo todos os valores do checkbox em apenas um array
    let optionsChecked = optionsValue.join(", ");
    alert("Nome: " + name + "\nCor Primária: " + favoriteColor + "\nGosta de programar? " + likeProgramming + "\nConhecimentos em programação web: " + optionsChecked )}