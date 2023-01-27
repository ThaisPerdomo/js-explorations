function clicou () {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((respostaPura) => {
            return respostaPura.json();
        })
        .then((respostaEmFormaDeObjeto) => {
            console.log(`O título do primeiro post é ${respostaEmFormaDeObjeto[0].title}`)
        })
        .catch((error) => {
            alert("Tente novamente mais tarde");
            console.log(error);
        })
        .finally(()=> {
            console.log("Isso vai executar independente da requisicao ter dado certo ou errado")
        })
    
    console.log("Essa mensagem vai aparecer antes da anterior porque a anterior é assíncrona")
}

document.querySelector("#botao").addEventListener('click', clicou);