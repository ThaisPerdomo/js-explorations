// // Fazendo uma função de clique

// function clicou () {
//     console.log("clicou no botao");
// };

// let botao = document.querySelector ("#botao1");

// botao.addEventListener("click",  ()  => {
//     console.log("clicou no botao");
// });


// // Exercicio 1 

// function modificaLista1 () {
//     let lista = document.querySelector("#minhaLista1");
//     let listaParaModificar = lista.querySelector('ul');

//     let novoItemNaLista = document.createElement('li');
//     // Variável que seleciona o tipo de elemento a ser criado

//     novoItemNaLista.innerText = "Texto que vai no item adicionado";
//     // Determina o texto que vai nesse elemento

//     listaParaModificar.appendChild(novoItemNaLista);
//     // Cria o elemento de fato
// }

// // Exercicio 2

// function addBotao () {
//     let lista = document.querySelector("#minhaLista2");
//     let listaQueVaiTerAlgoAdicionadoDepoisDela = lista.querySelector('ul');

//     let novoBotao = document.createElement('button');
//     // Variável que seleciona o tipo de elemento a ser criado

//     novoBotao.innerText = "Botão criado";
//     // Determina o texto que vai nesse elemento

//     listaQueVaiTerAlgoAdicionadoDepoisDela.before(novoBotao);
//     // Cria o elemento de fato, DEPOIS da lista. 
//     // Se quisesse que fosse antes, usaria o .before
// }

// // Manipulando atributos (exercicio 3)

function manipulandoAtributo() {

    const input = document.querySelector('input');
    
    console.log(input);
}