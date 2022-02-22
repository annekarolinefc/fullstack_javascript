ReactDOM.render(
    //injeta os elementos react na tela

    //CRIANDO UM ELEMENTO PARA INJETAR
    React.createElement(
        'h1',
        null,
        'Hello World'
    ), //passou o que é para ser injetado
    document.getElementById('root') //passou para onde injetar
)