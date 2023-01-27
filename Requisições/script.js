function clicou () {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((respostaPura) => {
            return respostaPura.json();
        })
        .then((respostaEmFormaDeObjeto) => {
            console.log(`O título do primeiro post é ${respostaEmFormaDeObjeto[0].title}`)
        })

}

document.querySelector("#botao").addEventListener('click', clicou);